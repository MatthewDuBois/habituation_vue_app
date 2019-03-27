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
            <div class="containe"><h3>Physicality: {{avatar.physicality}}</h3></div> 
            <div class="containe"><h3>Intelligence: {{avatar.intelligence}}</h3></div> 
            <div class="containe"><h3>Humility: {{avatar.humility}}</h3></div> 
            <div class="containe"><h3>Mindfulness: {{avatar.mindfulness}}</h3></div> 
            <div class="containe"><h3>Intuition: {{avatar.intuition}}</h3></div> 
            <div><a href="/levelup">change attributes</a></div>
            <div><a href="/avataredit">choose path</a></div>
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


/*  #spritesheet {
    width: 200px;
    height: 300px;
    background: url(images/spritexb-2199.png) 0 0;
  }*/

  .card{
    border-color: pink;
    width: 500px;

  }

  .cyberpunk1 {
    width: 550px;
  }

  .sprite {
    width: 110px;
    height: 150px;
  }

  .quote{
    padding-left: 960px;
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
                            path: "",
                            gratitude: ""
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
    }
  }
</script>