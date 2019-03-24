<template>
  <div class="AvatarEdit">
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
          </div>
        </div> 
        <div class="col-sm-6">
          <br>
          <h3>The Paths:</h3>
          <div class="accordion" id="accordionExample">
            <div class="card">
              <div class="card-header" id="headingOne">
                <h2 class="mb-0">
                  <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Tech-Guru
                  </button>
                </h2>
              </div>
              <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="card-body">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  </p>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingTwo">
                <h2 class="mb-0">
                  <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Warrior-Poet
                  </button>
                </h2>
              </div>
              <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                <div class="card-body">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  </p>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingThree">
                <h2 class="mb-0">
                  <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Alchemist-Hunter
                  </button>
                </h2>
              </div>
              <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                <div class="card-body">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  </p>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingFour">
                <h2 class="mb-0">
                  <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Wanderlust-Hacker
                  </button>
                </h2>
              </div>
              <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                <div class="card-body">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  </p>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingFive">
                <h2 class="mb-0">
                  <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    Ascetic-Seer
                  </button>
                </h2>
              </div>
              <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                <div class="card-body">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  </p>
                </div>
              </div>
            </div>
          </div>

            <div>
              <label>At level 4 you may choose your Path:</label>
              <br>
              <select v-model="newPath">
                <option value="tech_guru">Tech-Guru</option>
                <option value="warrior_poet">Warrior-Poet</option>
                <option value="alchemist_hunter">Alchemist-Hunter</option>
                <option value="wanderlust_hacker">Wanderlust-Hacker</option>
                <option value="ascetic_seer">Ascetic-Seer</option>
              </select>
            </div>  

          <div class='container'>
            <form v-on:submit.prevent="update(avatar)">
              <div class="new-button">
                <input type="submit" value="click!" class="btn btn-info btn-sm">
              </div>
            </form>
            <div><a href="/avatarhome">avatar home</a></div>
            <div><a href="/levelup">change attributes</a></div>
          </div> 
          </div>
        </div>
      </div>
      </div>
  </div>  
</template>


<style>

  select{
    color: darkblue;
  }

  .cyberpunk {
    width: 350px;
  }

  p{
    color: darkblue;
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
                          path: ""
                        }
                        ],
              avatar_id: "",
              newPath: "",
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
      update: function(avatar) {
        var params = {};
          if (avatar.level >= 4) {
            path: this.newPath};
                      
        axios.patch("/api/avatars/" + this.avatars_id, params)
          .then(response => {
            this.$router.push("/avatarhome");
          }).catch(error => {
            this.errors = error.response.data.errors;
          });
      }
    }

  }
</script>