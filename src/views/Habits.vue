<template>
  <div class="habits">

    <div class="greeting">
    <h2>Your Habits</h2>
    </div>
    <br>
    <div v-for="habit in habits">
      <div class="container">
        <router-link v-bind:to="'/habits/' + habit.id + '/edit'"><h1>{{ habit.name }}</h1></router-link>
        <h4> {{ habit.description }}</h4>
        <div v-for="habit_completed in habit.habit_completeds">
          <h5>{{ habit_completed.created_at }}</h5>
        </div>
        <div class='container'>
          <form v-on:submit.prevent="completed(habit)">
            <div class="new-button">
              <input type="submit" value="completed?" class="btn btn-success btn-sm">
            </div>
          </form>
        </div>  
        <br>
      </div>
    </div>
  </div>



   
</template>


<style>

.container {
  text-align: center;

}
.greeting{
  text-align: center;
  text-decoration: underline;
}

</style>


<script>
import axios from "axios";

export default {
  data: function() {
    return {
        habits: [{
                  habit_completeds: [{
                    created_at: ""
                  }]

                }],
                
                
      errors: []
    };
  },
  created: function() {
    axios.get("/api/habits/")
      .then(response => {
        this.habits = response.data;
      })
  },
  methods: {
    completed: function(inputHabit) {
      var params = {
                    habit_id: inputHabit.id
                    };
                    
      axios.post("/api/habit_completeds/", params)
        .then(response => {
          this.habit = response.data;
          this.$router.push("/habits");
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
}
</script>