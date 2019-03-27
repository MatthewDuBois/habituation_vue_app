<template>
  <div class="levelUp">
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <div class="col-sm-6">
              <div class="intro-text">
                <br>
                  <h1>Habituation</h1>
                  <p>Become the best version <br> of yourself</p>
                  <img class="cyberpunk5" src="images/cyberpunk-street.png">
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
          <br>
          <br>
            <h4>Current Attributes</h4>
            <div v-for="avatar in avatars">
              <div v-if="avatar_id == avatar.id">

                <div class="container">
                  <h6>Points Available: {{avatar.points}}</h6>
                </div>
                <br>

                <div class="container">
                  <h4>Physicality: {{avatar.physicality}}</h4>
                  <button v-on:click="increasePhys(avatar)" type="button" class="btn btn-outline-danger btn-sm">Increase
                  </button>
                </div>
                <br>
                <div class="container">
                  <h4>Intelligence: {{avatar.intelligence}}</h4>
                  <button v-on:click="increaseIntel(avatar)" type="button" class="btn btn-outline-danger btn-sm">Increase
                  </button>
                </div> 
                <br>
                <div class="container">
                  <h4>Humility: {{avatar.humility}}</h4>
                  <button v-on:click="increaseHum(avatar)" type="button" class="btn btn-outline-danger btn-sm">Increase
                  </button>
                </div> 
                <br>
                <div class="container">
                  <h4>Mindfulness: {{avatar.mindfulness}}</h4>
                  <button v-on:click="increaseMind(avatar)" type="button" class="btn btn-outline-danger btn-sm">Increase
                  </button>
                </div> 
                <br>
                <div class="container">
                  <h4>Intuition: {{avatar.intuition}}</h4>
                  <button v-on:click="increaseIntuit(avatar)" type="button" class="btn btn-outline-danger btn-sm">Increase
                  </button>
                </div> 
                <br>
                <div class='container'>
                  <h6>Save Changes:</h6>
                  <form v-on:submit.prevent="submit(avatar)">
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

  .cyberpunk5 {
    width: 350px;
  }

  .steamer {
    width: 200px;
    height: 300px;
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
                avatars: 
                          [{
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
                            path: "",
                            points: ""
                          }],
                avatar_id: "",
                pointsChange: false,
                physicalityChange: false,
                intelligenceChange: false,
                mindfulnessChange: false,
                humilityChange: false,
                intuitionChange: false,
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
      increasePhys: function(avatar) {
        if (avatar.points > 0) {
        avatar.physicality += 1;
        this.physicalityChange = true;
        avatar.points -= 1;
        this.pointsChange = true;
        }
      },
      increaseIntel: function(avatar) {
        if (avatar.points > 0) {
        avatar.intelligence += 1;
        this.intelligenceChange = true;
        avatar.points -= 1;
        this.pointsChange = true;
        }
      },
      increaseMind: function(avatar) {
        if (avatar.points > 0) {
        avatar.mindfulness += 1;
        this.mindfulnessChange = true;
        avatar.points -= 1;
        this.pointsChange = true;
        }
      },
      increaseHum: function(avatar) {
        if (avatar.points > 0) {
        avatar.humility += 1;
        this.humilityChange = true;
        avatar.points -= 1;
        this.pointsChange = true;
        }
      },
      increaseIntuit: function(avatar) {
        if (avatar.points > 0) {
        avatar.intuition += 1;
        this.intuitionChange = true;
        avatar.points -= 1;
        this.pointsChange = true;
        }
      },

      submit: function(avatar){
        var params = {};

        if (this.physicalityChange) {
          params.physicality = avatar.physicality
        }

        if (this.intelligenceChange) {
          params.intelligence = avatar.intelligence
        }

        if (this.mindfulnessChange) {
          params.mindfulness = avatar.mindfulness
        }

        if (this.humilityChange) {
          params.humility = avatar.humility
        }

        if (this.intuitionChange) {
          params.intuition = avatar.intuition
        }

        if (this.pointsChange){
          params.points = avatar.points
        }
                      

        axios.patch("/api/avatars/" + avatar.id, params)
          .then(response => {
            this.$router.push("/avatarhome");
          }).catch(error => {
            this.errors = error.response.data.errors;
          });
      } 
    }
  }
</script>