<template>
  <div class="specials">
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
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                      <div class="container">Gratitude: {{avatar.gratitude}}</div> 
                    </div>
                  </div>
                  <br>
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                      <div class="container">Vigor: {{avatar.vigor}}</div> 
                    </div>
                  </div>
                  <br>
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                      <div class="container">Knowledge: {{avatar.knowledge}}</div> 
                    </div>
                  </div>
                  <br>
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                      <div class="container">Zen: {{avatar.zen}}</div> 
                    </div>
                  </div>

                </div>
              </div>
              <a href="/avatarhome">avatar home</a>
          </div>
        </div> 
        <div class="col-sm-12 col-md-8 col-lg-5">
          <div class="container">
            <br>
            <h4>Attributes</h4>
          </div>  
            <div v-for="avatar in avatars">
              <div v-if="avatar_id == avatar.id">

                <div class="container">
                  <h6>Physicality: {{avatar.physicality}}</h6>
                  <p>description of what physicality does...</p>
                </div>
                <br>
                <div class="container">
                  <h6>Intelligence: {{avatar.intelligence}}</h6>
                  <p>description of what intelligence does...</p>
                </div> 
                <br>
                <div class="container">
                  <h6>Humility: {{avatar.humility}}</h6>
                  <p>description of what humility does...</p>
                </div> 
                <br>
                <div class="container">
                  <h6>Mindfulness: {{avatar.mindfulness}}</h6>
                 <p>description of what container does...</p>
                </div> 
                <br>
                <div class="container">
                  <h6>Intuition: {{avatar.intuition}}</h6>
                  <p>description of what intuition does....</p>
                </div> 
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>  
</template>


<style>

p{
  color: pink;
}

.progress{
  height: 50px;
}

  .cyberpunk {
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