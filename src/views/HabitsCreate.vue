<template>
  <div class="habits-create">

    <h2>Please create a new habit to work towards improving your life you loser...</h2>

    <ul>
      <li v-for="error in errors"> {{ error }} </li>
    </ul>

    <div class="form-group">
      <label>Name:</label> 
      <input type="text" class="form-control" v-model="name">
    </div>
    <div class="form-group">
      <label>Description:</label>
      <input type="description" class="form-control" v-model="description">
    </div>
    <div class="form-group">
      <label>Points:</label>
      <input type="points" class="form-control" v-model="points">
    </div>

    <div class='container'>
      <h2 v-model="habit.name">Create habit: </h2>
      <form v-on:submit.prevent="create()">
       
        <div class="new-button">
          <input type="submit" value="click me..." class="btn btn-primary">
        </div>
      </form>
    </div>
  </div>
</template>


<style>

</style>


<script>
import axios from "axios";

export default {
  data: function() {
    return {
      habit: {
                    habit_id: "",
                    name: "",
                    description: "",
                    active: "",
                    points: "",
                    routine_time_increment: "",
                    routine_time_quantity: "",
                    avatar_id: ""
                  },
      errors: []
    };
  },
  created: function() {
    axios.get("/api/habits")
      .then(response => {
        this.habit = response.data;
      })
  },
  methods: {
    create: function() {
      var params = {
                    name: this.habit.name,
                    description: this.habit.description,
                    active: this.habit.active,
                    points: this.habit.points,
                    routine_time_quantity: this.habit.routine_time_quantity,
                    routine_time_increment: this.habit.routine_time_increment
                    // avatar_id: this.habit.avatar_id
                    };
                    
      axios.patch("/api/habits/" + this.habit.id, params)
        .then(response => {
          this.$router.push("/habits");
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
}
</script>