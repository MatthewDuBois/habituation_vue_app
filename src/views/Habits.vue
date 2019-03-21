<template>
  <div class="habits">
    <div class="col-sm-12">
      <br>
      <img class="industrial" src="images/cyberpunk-street.png">
    </div>
    <div class="container1">
      <div class="col-sm-4">
        <br>
      <div v-for="avatar in avatars">
        <div v-if="avatar_id == avatar.id">
          <div class="container">XP: {{avatar.xp_total}}</div> 
          <div class="container">Level: {{avatar.level}}</div> 
          <div class="container">Path: {{avatar.path.toUpperCase()}}</div> 
          <div class="container">Gold: {{avatar.gold_total}}</div> 
        </div>
      </div>
    </div>
    </div>
    <div class="container">
    <div class="col-sm-8 col-md-12 col-lg-12">
    <div class="greeting">
    <h2>Your Habits</h2>
    </div>
    <div class="text">
      <p>click habit title to edit habit</p>
      <a href="/avatarhome">avatar home</a>
    </div> 
    <div v-for="habit in habits">
      <div class="container">
        <router-link v-bind:to="'/habits/' + habit.id + '/edit'"><h1>{{ habit.name }}</h1></router-link>
        <h4> {{ habit.description }}</h4>

<button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
  </button>

  <div class="collapse" id="collapseExample">
    <div class="card card-body">
     <div v-for="habit_completed in habit.habit_completeds">
          <h5>{{ habit_completed.created_at }}</h5>
        </div>
    </div>
  </div>


        <div class='container'>
          <form v-on:submit.prevent="completed(habit)">
            <div class="new-button">
              <input type="submit" value="completed?" class="btn btn-success btn-sm">
            </div>
          </form>
        </div>  
      </div>
    </div>
  </div>
</div>
</div>
</template>


<style>

.industrial {
  width: 650px;
  height: 160px;
}

.container {
  text-align: center;

}
.greeting{
  text-align: center;
  text-decoration: underline;
}

.text{
  text-align: center;
  color: pink;
}

</style>


<script>
import axios from "axios";

export default {
  data: function() {
    return {
        habits: [{
                  difficuly: "",
                  habit_completeds: [{
                    created_at: ""
                  }]

                }],
                avatars: [
                          {
                            id: "",
                            name: "",
                            email: "",
                            gold_total: "",
                            xp_total: "",
                            level: "",
                            path: ""
                          }
                          ],
                avatar_id: "",
                
                
      errors: []
    };
  },
  created: function() {
    axios.get("/api/habits/")
      .then(response => {
        this.habits = response.data;
      });this.avatar_id = localStorage.getItem("avatar_id");
      axios.get("/api/avatars")
        .then(response => {
          this.avatars = response.data;
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
          axios.get("/api/habits/")
          .then(response => {
        this.habits = response.data;
      })
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
}
</script>