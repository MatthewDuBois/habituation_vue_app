<template>
  <div class="habits-create">

    <h2>Please create a new habit to work towards improving your life...</h2>

    <ul>
      <li v-for="error in errors"> {{ error }} </li>
    </ul>

    <div class="form-group">
      <label>Name:</label> 
      <input type="text" class="form-control" v-model="newName">
    </div>
    <div class="form-group">
      <label>Description:</label>
      <input type="description" class="form-control" v-model="newDescription">
    </div>

    <div>
      <label>Difficulty:</label>
      <br>
      <select v-model="newDifficulty">
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>  


<!--     <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-model="newDifficulty">
        Difficulty
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" value="easy" href="#">Easy</a>
        <a class="dropdown-item" value="medium" href="#">Medium</a>
        <a class="dropdown-item" value="hard" href="#">Hard</a>
      </div>
    </div>  -->
    
    <br>

    <div class='container'>
      <h5 v-model="newName">Create habit: </h5>
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
                    newName: "",
                    newDescription: "",
                    newActive: "",
                    newDifficulty: "",
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
                    name: this.newName,
                    description: this.newDescription,
                    difficulty: this.newDifficulty,
                    // routine_time_quantity: this.routine_time_quantity,
                    // routine_time_increment: this.routine_time_increment
                    // avatar_id: this.habit.avatar_id
                    // active: this.active,
                    };
                    
      axios.post("/api/habits/", params)
        .then(response => {
          this.$router.push("/habits");
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
}
</script>