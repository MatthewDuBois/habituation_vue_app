<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <div class="col-sm-8 col-md-6 col-lg-6 intro-text-wrapper">
              <div class="intro-text">
                <br>
                  <h1>Habituation</h1>
                  <p>Become the best version <br> of yourself</p>
                  <img class="cyberpunk1" src="images/cyberpunk-street.png">
              </div>
              <div class="habit-links">
                <ul class="list-unstyled">
                  <li><a href="/habits">List Habits</a></li>
                  <li><a href="/habits/create">Create a new Habit</a></li>
                </ul>
              </div>
              <div v-for="avatar in avatars">
                <div v-if="avatar_id == avatar.id">
                  <div class="container">XP: {{avatar.xp_total}}</div> 
                  <div class="container">Level: {{avatar.level}}</div> 
                  <div class="container">Path: {{avatar.path}}</div> 
                  <div class="container">Gold: {{avatar.gold_total}}</div> 
                </div>
              </div>
          </div>
        </div> 
        <div class="col-sm-3">
          <h6>eventually a customizable sprite...</h6>
          <img class="steamer" src="images/steamer.jpg">
        </div>
        <div v-for="avatar in avatars">
          <div v-if="avatar_id == avatar.id">
            <h4>Avatar Attributes:</h4>
            <div class="container">Physicality: {{avatar.physicality}}</div> 
            <div class="container">Intelligence: {{avatar.intelligence}}</div> 
            <div class="container">Humility: {{avatar.humility}}</div> 
            <div class="container">Mindfulness: {{avatar.mindfulness}}</div> 
            <div class="container">Intuition: {{avatar.intuition}}</div> 
          </div>
        </div>
      </div>
      </div>
  </div>  
</template>


<style>

  .cyberpunk {
    width: 350px;
  }

  .steamer {
    width: 200px;
    height: 300px;
  }

  /*img{
    width: 350px;
      }*/

  a{ 
    text-decoration: underline;
    }

</style>


<script>
import axios from "axios";


export default {
  data: function() {
      return {
                avatars: [
                          {
                            id: "",
                            name: "",
                            email: "",
                            gold_total: "",
                            xp_total: "",
                            level: "",
                            physicality: "",
                            intelligence: "",
                            mindfulness: "",
                            humility: "",
                            intuition: "",
                            path: ""
                          }
                          ],
                avatar_id: "",
                errors: []
      };
    },
    created: function() {
      this.avatar_id = localStorage.getItem("avatar_id");
      axios.get("/api/avatars")
        .then(response => {
          this.avatars = response.data;
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