<template>
  <div class="home">
    <div class="container">
          <div class="row intro-wrapper">  
              <div class="col-sm-4 intro-text-wrapper">
                <br>
                  <div class="intro-text">
                      <h1>Habituation</h1>
                      <p>Become the best version of yourself</p>
                      <div class="container1">
                        <img src="images/iso-H.jpg">
                      </div>
                  </div>
              </div> 
          </div>   
      </div>
      <div class="container4">
        <div class="col-sm-">
         
            <h3>Habituation helps you foster good habits to realize a more intentional way of living</h3>
       
        </div>
        <div class="homeimage">
          <!-- <img class="cyberhome" src="images/cyberpunk-street.png"> -->
        </div>
        <div class="words">
            <p>Create an avatar </p>
            <br>
            <div class="words2">
            <p>level up</p>
            </div>
            <br>
            <div class="words3">
            <p>choose a path</p>
            </div>
            <div>
              <span>
                <img class="sprite" src="images/blondie.png">
                <img class="sprite" src="images/boy.png">
                <img class="sprite" src="images/gemguyu.png">
                <img class="sprite" src="images/grnknight.png">
                <img class="sprite" src="images/wizard.png">
              </span>
              
            </div>
        </div>
      </div>
  </div>
</template>


<style>

.words3{
  padding-left: 400px;
}

.words2{
  padding-left: 200px;
}

  .container1{
  }

.cyberhome{
  width: 600px;
}

.homeimage{
  padding-left: 800px;
}

img{
  width: 300px;
}

</style>


<script>
import axios from "axios";


export default {
  name: 'home',
  components: {
    
  }
}
</script>
