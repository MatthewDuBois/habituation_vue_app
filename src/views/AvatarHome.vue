<template>
  <div class="home">
    <div class="container6">
      <div class="row">
        <div class="col-sm-6">
          <div class="col-sm-6 intro-text-wrapper">
              <div class="intro-text">
                <br>
                  <h1>Habituation</h1>
                  <p>Become the best version of yourself</p>
                  <img class="cyberpunk1" src="images/cyberpunk-street.png">
              </div>
              <div class="habit-links">
                <ul class="list-unstyled">
                  <li><a href="/habits">List Habits</a></li>
                  <li><a href="/habits/create">Create a new Habit</a></li>
                  <li><a href="/specials">Attribute Descriptions</a></li>
                </ul>
              </div>
              <br>
              <div v-for="avatar in avatars">
                <div v-if="avatar_id == avatar.id">
                  <div class="container"><h3>Current XP: {{avatar.xp_total}}</h3></div> 
                  <div class="container"><h3>Next Level: {{avatar.level * 100}}</h3></div> 
                  <div class="container"><h3>Current Level: {{avatar.level}}</h3></div> 
                  <div class="container"><h3>Path: {{avatar.path}}</h3></div> 
                  <div class="container"><h3>Gold: {{avatar.gold_total}}</h3></div> 
                </div>
              </div>
              <div></div>
          </div>
        </div> 
        <div class="col-sm-3">
          <br>
          <br>
          <br>
          <br>
          <h6>Your Avatar</h6>
          <br>
          <div class="spritecontainer">
          <div id="spritesheet">
           <span>
            <img class="sprite" src="images/pinkguy.png">
            <img class="sprite" src="images/pinkguyside2.png">
            <img class="sprite" src="images/pinkguyback.png">
            <img class="sprite" src="images/pinkguyside.png">
            <img class="sprite" src="images/pinkguywalk.png">
            <img class="sprite" src="images/pinkguywalk2.png">
            </span> 
          </div>
          </div>
        </div>
        <div v-for="avatar in avatars">
          <div v-if="avatar_id == avatar.id">
            <br>
            <br>
            <br>
            <br>
            <h4>Avatar Attributes:</h4>
            <div class="containe mt-1"><h3>Physicality: {{avatar.physicality}}</h3></div> 
            <div class="containe mt-1"><h3>Intelligence: {{avatar.intelligence}}</h3></div> 
            <div class="containe mt-1"><h3>Humility: {{avatar.humility}}</h3></div> 
            <div class="containe mt-1"><h3>Mindfulness: {{avatar.mindfulness}}</h3></div> 
            <div class="containe mt-1"><h3>Intuition: {{avatar.intuition}}</h3></div> 
            <div class="btn btn-md btn-info mt-1"><router-link to="/levelup">Change Attributes</router-link></div>
            <div class="modal1">
              <modal v-if="showModal">
                <h4 slot="header" class="modal-title text-center">
                    Paths
                </h4>
                <div slot="body" class="mb-3">

                  <div class="g text-center pl-5">
                    <h3>The Paths:</h3>
                    <div class="accordion text-center" id="accordionExample">
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
                            <p>A futurist and visionary equally at home talking quantam mechanics or meditative stillness trying to combine the formless with invented form to create a better future by improving their present.  This path is one that benefits the most from intelligence and mindfullness.  
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
                    </div> 
                  </div>

                </div>
                <div slot="footer" class="mt-3">
                 <button type="button" class="btn btn-outline-info mr-1" @click="closeModal()"> Close </button>
                 <button type="button" class="btn btn-info ml-1" data-dismiss="modal" @click="closeModal(); submit();">
                   Submit
                 </button>
                </div>
              </modal>
              <button class="btn btn-md btn-info mt-2" @click="openModal()">Choose Path</button>
            </div>
          </div>
        </div>
        <div class="quote">
          <p>Don't wait to be successful at some future point. 
            <br>Have a successful relationship with the present moment 
            <br>and be fully present in whatever you are doing. That is success. 
            <br> -Eckhart Tolle</p>
        </div>

      </div>
      </div>
  </div>  
</template>


<style>


/*.accordion{
  width: 200px;
}*/

/*  #spritesheet {
    width: 200px;
    height: 300px;
    background: url(images/spritexb-2199.png) 0 0;
  }*/

  .g{
    padding-right: 50px;
  }

  .card{
    border-color: pink;
 /*   width: 500px;*/

  }

  .cyberpunk1 {
    width: 550px;
  }

  .sprite {
    width: 110px;
    height: 150px;
  }

  .quote{
    padding-left: 950px;
    color: pink;
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
import Modal from '../components/Modal.vue'


export default {
  components: {
    Modal
  },

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
                            path: "",
                            gratitude: ""
                          }
                          ],
                avatar_id: "",
                errors: [],
                showModal: false
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
      openModal: function() {
      this.showModal = true;
    },

      closeModal: function() {
      this.showModal = false;
    },
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