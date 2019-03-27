<template>
  <div class="habits-create">
    <div class="holder">
      <h2>Create a new habit
      <br> to work towards improving your life...</h2>

      <ul>
        <li v-for="error in errors"> {{ error }} </li>
      </ul>

      <div class="form-group2">
        <label>Name:</label> 
        <input type="text" class="form-control" v-model="newName">
      </div>
      <div class="form-group1">
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
    </div>

    <div class='container'>
      <h5 v-model="newName">Create habit: </h5>
      <form v-on:submit.prevent="create()">
        <div class="new-button">
          <input type="submit" value="click!" class="btn btn-info btn-sm">
        </div>
      </form>
      <a href="/avatarhome">avatar home</a>
    </div>
  </div>
</template>


<style>
.form-group2{
  width: 400px;
}

.form-group1{
  width: 800px;
}

.holder{
  padding-left: 300px;
  align-self: center;
  align-content: center;

}

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
                    difficulty: this.newDifficulty
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