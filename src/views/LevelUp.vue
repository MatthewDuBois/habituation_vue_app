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
              <div v-for="avatar in avatars">
                <div v-if="avatar_id == avatar.id">
                  <div class="container">XP: {{avatar.xp_total}}</div> 
                  <div class="container">Level: {{avatar.level}}</div> 
                  <div class="container">Path: {{avatar.path}}</div> 
                  <div class="container">Gold: {{avatar.gold_total}}</div> 
                </div>
              </div>
              <a href="/avatarhome">avatar home</a>
          </div>
        </div> 
        <div class="col-sm-12 col-md-8 col-lg-5">
            <h4>Current Attributes</h4>
            <br>
            <div v-for="avatar in avatars">
              <div v-if="avatar_id == avatar.id">

                <div class="container">
                  <h4 v-model="newPhysicality">Physicality: {{avatar.physicality}}</h4>
                  <button v-on:click="increase(avatar, 'physicality')" type="button" class="btn btn-outline-danger btn-sm">Increase
                  </button>
                </div>
                <br>
                <div class="container">
                  <h4 v-model="newIntelligence">Intelligence: {{avatar.intelligence}}</h4>
                  <button v-on:click="increase(avatar, 'intelligence')" type="button" class="btn btn-outline-danger btn-sm">Increase
                  </button>
                </div> 
                <br>
                <div class="container">
                  <h4 v-model="newHumility">Humility: {{avatar.humility}}</h4>
                  <button v-on:click="increase(avatar, 'humility')" type="button" class="btn btn-outline-danger btn-sm">Increase
                  </button>
                </div> 
                <br>
                <div class="container">
                  <h4 v-model="newMindfulness">Mindfulness: {{avatar.mindfulness}}</h4>
                  <button v-on:click="increase(avatar, 'mindfulness')" type="button" class="btn btn-outline-danger btn-sm">Increase
                  </button>
                </div> 
                <br>
                <div class="container">
                  <h4 v-model="newIntuition">Intuition: {{avatar.intuition}}</h4>
                  <button v-on:click="increase(avatar, 'intuition')" type="button" class="btn btn-outline-danger btn-sm">Increase
                  </button>
                </div> 
                <br>
                <div class='container'>
                  <h5 >Save Changes:</h5>
                  <form v-on:submit.prevent="submit()">
                    <div class="new-button">
                      <input type="submit" value="submit" class="btn btn-info btn-sm">
                    </div>
                  </form>
                </div>
              </div>
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
                newPhysicality: "",
                newIntelligence: "",
                newMindfulness: "",
                newHumility: "",
                newIntuition: "",
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
      increase: function(inputAvatar, inputString) {
        inputAvatar[inputString] += 1;
      },
      
                      
        // axios.post("/api/habits/", params)
        //   .then(response => {
        //     this.$router.push("/habits");
        //   }).catch(error => {
        //     this.errors = error.response.data.errors;
        //   });
      
    }
  }
</script>