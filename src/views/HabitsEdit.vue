<template>
  <div class="habits-edit">

    <h2>Please edit your habit...</h2>

    <ul>
      <li v-for="error in errors"> {{ error }} </li>
    </ul>

    <div class="form-group">
      <label>Name:</label> 
      <input type="text" class="form-control" v-model="habit.name">
    </div>
    <div class="form-group">
      <label>Description:</label>
      <input type="description" class="form-control" v-model="habit.description">
    </div>
    <div class="form-group">
      <label>Difficulty:</label>
      <input type="difficulty" class="form-control" v-model="habit.difficulty">
    </div>

    <div class='container'>
      <h2 v-model="habit.name">Edit habit: </h2>
      <form v-on:submit.prevent="submit()">
       
        <div class="new-button">
          <input type="submit" value="click me..." class="btn btn-primary">
        </div>
      </form>
      <br>
      <div class="habit-links">
        <ul class="list-unstyled">
          <li><a href="/avatarhome">Avatar Home</a></li>
          <li><a href="/habits/create">Create Habit</a></li>
        </ul>
      </div>
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
                    difficulty: "",
                    routine_time_increment: "",
                    routine_time_quantity: "",
                    avatar_id: "",
                    gold: "",
                    xp: ""
                  },
      errors: []
    };
  },
  created: function() {
    axios.get("/api/habits/" + this.$route.params.id)
      .then(response => {
        this.habit = response.data;
      })
  },
  methods: {
    submit: function() {
      var params = {
                    name: this.habit.name,
                    description: this.habit.description,
                    difficulty: this.habit.difficulty,
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