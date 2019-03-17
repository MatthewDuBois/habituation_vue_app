<template>
  <div class="habits">
    <h2>Here are your habits...</h2>
    <br>
    <div v-for="habit in habits">
      <div class="container">
        <h1>{{ habit.name }}</h1>
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

       <!--  <h2>Temptations</h2>
      <div class="card-deck">
        <div class="col-md-4" v-for="temptation in temptations">
          <router-link v-bind:to="'/temptations/' + temptation.id + '/edit'">
            <div class="card mt-3 bg-light"><span class="border border-default"></span>
              <div>
                <div class="brand-card-header">
                  <h2 class="card-title mt-3 text-center text-dark" > {{ temptation.name }}</h2>
                </div>
                <div class="brand-card">
                  <div class="brand-card-body">
                    <div>
                      <p class="card-text text-center"><small class="text-dark"> ${{ temptation.cost }} </small></p>
                    </div>
                    <p></p>                    
                    <div> 
                      <p class="card-text text-center"><small class="text-dark"> {{ temptation.time }} </small></p>
                    </div>  
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div> -->
</template>


<style>

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