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
              </div> 
          </div>   
      </div>
  </div>
</template>


<style>
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