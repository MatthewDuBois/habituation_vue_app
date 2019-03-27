<template>
  <div class="habits">
    <div class="row">
    <div class="col-sm-3">
      <br>
      <br>
      <h1>Habituation</h1>
      <p>Become the best version of yourself</p>
      <div class="container4">
        <br>
          <div class="greeting">
            <h2>Your Habits</h2>
              <a href="/avatarhome">avatar home</a>
          </div>
          <br>
          <div class="text">
            <p>click habit title to edit habit</p>
          </div> 
          <div v-for="habit in habits">
            <div class="container4">
              <router-link v-bind:to="'/habits/' + habit.id + '/edit'"><h1>{{ habit.name }}</h1></router-link>
                <h5>Description: {{ habit.description }}</h5>
                  <button class="btn btn-primary btn-sm" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">expand history
                    <div class="collapse" id="collapseExample">
                      <div class="card card-body">
                       <div v-for="habit_completed in habit.habit_completeds">
                            <h4>{{ habit_completed.created_at }}</h4>
                          </div>
                      </div>
                    </div>
                  </button>

            <div class='container4'>
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
    <div class="col-sm-9">
    <div class="image7">
      <br>
      <br>
      <br>
      <br>
      <img class="skyline" src="images/pinkskyline.jpg">
      </div>
      <div class="quote2">
        <br>
        <br>
        <p>“…tomorrow and plans for tomorrow 
        can have no significance at all 
       <br> unless you are in full contact with the reality 
        of the present, since it is 
        <br>in the present 
        and only in the present that you live.” 
        <br>– Alan Watts.</p>
      </div>
      <h3></h3>
    </div>
   
  </div>
</div>
</template>


<style>

/*.row-2{
  padding-left: 650px;
}*/
.image7 {
  padding-left: 400px;
}

.row{
  padding-left: 100px;
}

.skyline {
  width: 700px;
  height: 500px;
/*  float: left;*/

}

.quote2{
  padding-left: 500px;
}

.container4 {
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
  color: white;
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