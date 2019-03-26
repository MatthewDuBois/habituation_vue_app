<template>
  <div class="habits">
    <div class="row">
    <div class="col-sm-4">
      <br>
      <br>
      <h1>Habituation</h1>
      <p>Become the best version <br> of yourself</p>
      <div class="container">
        <br>
          <div class="greeting">
            <h2>Your Habits</h2>
              <a href="/avatarhome">avatar home</a>
          </div>
          <div class="text">
            <p>click habit title to edit habit</p>
          </div> 
          <div v-for="habit in habits">
            <div class="container">
              <router-link v-bind:to="'/habits/' + habit.id + '/edit'"><h1>{{ habit.name }}</h1></router-link>
                <h4>Description: {{ habit.description }}</h4>
                  <button class="btn btn-primary btn-sm" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">expand history
                    <div class="collapse" id="collapseExample">
                      <div class="card card-body">
                       <div v-for="habit_completed in habit.habit_completeds">
                            <h5>{{ habit_completed.created_at }}</h5>
                          </div>
                      </div>
                    </div>
                  </button>

            <div class='container'>
              <form v-on:submit.prevent="completed(habit)">
                <br>
                <div class="new-button">
                  <input type="submit" value="completed?" class="btn btn-success btn-sm">
                </div>
                <br>
              </form>
            </div>  
          </div>
        </div>
      </div>
    </div>
    <div class="image">
      <br>
      <br>
      <br>
      <br>
      <img class="industrial" src="images/pinkskyline.jpg">
      <div class="quote">
        <p>“…tomorrow and plans for tomorrow 
        <br>can have no significance at all 
        <br>unless you are in full contact with the reality 
        <br>of the present, since it is in the present 
        <br>and only in the present that you live.” 
        <br>– Alan Watts.</p>
      </div>
      </div>
    </div>
   
  </div>
</div>
</template>


<style>

/*.row-2{
  padding-left: 650px;
}*/
.image {
  padding-left: 300px;
}

.row{
  padding-left: 100px;
}

.industrial {
  width: 400px;

}

.quote{
  padding-left: 34px;
}

.container {
  text-align: center;
}
.greeting{
  text-align: center;
  text-decoration: italic;
}

.text{
  text-align: center;
  color: pink;
}

h5 {
  color: black;
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
      // var completedArray = [];
      // let newObj = JSON.parse(JSON.stringify(obj));
                    
      axios.post("/api/habit_completeds/", params)
        .then(response => {
          this.habit = response.data;
          this.$router.push("/habits");
          axios.get("/api/habits/")
          .then(response => {
        this.habits = response.data;
      });
          axios.get('api/avatars')
          .then(response => {
            this.avatars = response.data;
          });
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
}
</script>