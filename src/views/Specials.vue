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
                    <div class="progress-bar" role="progressbar"  aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                      <div class="container">Knowledge: {{avatar.knowledge}}</div> 
                    </div>
                  </div>
                  <br>
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" v-bind:style="calculated(avatar)" aria-valuenow="50" aria-valuemin="50" aria-valuemax="100">
                       <div class="container">Zen: {{avatar.zen}}
                    </div>   
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
                  <p>Physicality increases power of melee skills, gives bonuses on health regeneration, increases resistance to bad habit sickness.</p>
                </div>
        
                <div class="container">
                  <h6>Intelligence: {{avatar.intelligence}}</h6>
                  <p>Intelligence increases power of alchemy skills, increases resistances to any intelligence based attacks, improves crafting.</p>
                </div> 
   
                <div class="container">
                  <h6>Humility: {{avatar.humility}}</h6>
                  <p>Humility affects your overall aura, those in your party receive bonuses on attributes and skills while enemy bosses are penalized.</p>
                </div> 
       
                <div class="container">
                  <h6>Mindfulness: {{avatar.mindfulness}}</h6>
                 <p>Mindfulness increases the power of source skills, all streak bonuses are increased, slows bad habit sickness.</p>
                </div> 
       
                <div class="container">
                  <h6>Intuition: {{avatar.intuition}}</h6>
                  <p>Intuition gives bonuses to all skills, increases chance of random loot drops and increased gold rewards.</p>
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
  width: 100%;
}

  .cyberpunk {
    width: 350px;
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
                            points: "",
                            gratitude: "",
                            knowledge: "",
                            vigor: "",
                            zen: ""

                          }],
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
      calculated: function (avatar) {
            return {
                width: this.zen + '%'
            };
        }
      
    }
  }
</script>

