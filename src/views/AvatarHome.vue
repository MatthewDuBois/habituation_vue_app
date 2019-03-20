<template>
  <div class="home">
    <div class="container">
          <div class="row intro-wrapper">  
              <div class="col-sm-12  col-md-12 col-lg-4 intro-text-wrapper">
                  <div class="intro-text">
                      <h1>Habituation</h1>
                      <p>Become the best version of yourself</p>
                      <img src="images/iso-H.jpg">
                  </div>
                  <div class="habit-links">
                    <ul class="list-unstyled">
                      <li><a href="/habits">List Habits</a></li>
                      <li><a href="/habits/create">Create a new Habit</a></li>
                    </ul>
                  </div>
                  <div v-for="avatar in avatars">
                    <div v-if="avatar_id == avatar.id">
                      <div class="container">Gold: {{avatar.gold_total}}</div> 
                      <div class="container">XP: {{avatar.xp_total}}</div> 
                      <div class="container">Level: {{avatar.level}}</div> 
                      <div class="container">Class: {{avatar.avatar_class.toUpperCase()}}</div> 
                    </div>
                  </div>
              </div> 
          </div>   
      </div>
  </div>
</template>


<style>

  img{
    width: 300px;
      }

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
                            avatar_class: ""
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