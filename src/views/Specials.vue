<template>
  <div class="specials">
    <div class="contain2">
    <div class="row mt-3">
          <div class="col-sm-6 intro-text-wrapper">
              <div class="intro-text">
                <br>
                  <h1>Habituation</h1>
                  <p>Become the best version of yourself</p>
                  <img class="cyberpunk9" src="images/cyberpunk-street.png">
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
              <br>
              <a href="/avatarhome">avatar home</a>
          </div>
      
        <div class="col-sm-6">
          <div class="container8">
            <br>

            <h4>Attributes</h4>
            <br>
        
            <div v-for="avatar in avatars">
              <div v-if="avatar_id == avatar.id">

                <div class="container">
                  <h4>Physicality: {{avatar.physicality}}</h4>
                  <h5>Physicality increases power of melee skills, gives bonuses on health regeneration, increases resistance to bad habit sickness.</h5>
                </div>
                  <br>
                <div class="container">
                  <h4>Intelligence: {{avatar.intelligence}}</h4>
                  <h5>Intelligence increases power of alchemy skills, increases resistances to any intelligence based attacks, improves crafting.</h5>
                </div> 
                  <br>
                <div class="container">
                  <h4>Humility: {{avatar.humility}}</h4>
                  <h5>Humility affects your overall aura, those in your party receive bonuses on attributes and skills while enemy bosses are penalized.</h5>
                </div> 
                  <br>
                <div class="container">
                  <h4>Mindfulness: {{avatar.mindfulness}}</h4>
                 <h5>Mindfulness increases the power of source skills, all streak bonuses are increased, slows bad habit sickness.</h5>
                </div> 
                  <br>
                <div class="container">
                  <h4>Intuition: {{avatar.intuition}}</h4>
                  <h5>Intuition gives bonuses to all skills, increases chance of random loot drops and increased gold rewards.</h5>
                </div> 
              </div>
            </div>
        </div>

      
    </div>
  
       

        </div> 
          </div>  
      </div>
    </div>
  </div>  
</template>


<style>

.contain2{
  align-self: left;
  padding-left: 100px;
}

.container8{
  align-self: right;}
 

h4{
  color: pink;
}

p{
  color: pink;
}

.progress{
  height: 50px;
  width: 50%;
}

  .cyberpunk9 {
    width: 650px;
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

