<template>
  <div id="app">
  <div id="loader-wrapper">
      <div id="loader"></div>
      <div class="loader-section section-left"></div>
      <div class="loader-section section-right"></div>
  </div>  
  <header id="header">
    <nav class="navbar navbar-expand-md navbar-light bg-faded cripto_nav">
      <div class="container">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item"><a data-scroll href="#header-01" class="nav-link active">Home</a></li>
                <li class="nav-item"><a data-scroll href="#about_cryptonic_01" class="nav-link">About</a></li>
                <li class="nav-item"><a data-scroll href="#subscribe_area_01" class="nav-link">Contact</a></li>
            </ul>
        </div>
        <div class="language">
          <a href="#" class="token active">Sign Up...</a>
          <a href="#" class="token">Login</a>
        </div>
      </div>
    </nav>

  </header>

  <router-view/>

  <footer id="footer-01" >
    <div class="container">
      <div class="row footer-btm-wrapper">
        <div class="col-sm-12 col-sm-12">
          <div class="footer_items">
            <div class="footer-single-col footer_single_list_1"></div>
              <div class="footer-single-col footer_single_list_2">
                <h3 class="subtitle_1">Habituation</h3> 
                <ul class="list-unstyled">
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">About Us</a></li>
                </ul>
              </div>

              <div class="footer-single-col footer_single_list_3">
                <h3 class="subtitle_1">Community</h3>
                <ul class="list-unstyled">
                  <li><a href="#">Contribute</a></li>
                  <li><a href="#">Wikia</a></li>
                </ul>
              </div>

   <!--          <div class="footer-single-col footer_single_list_4">
              <h3 class="subtitle_1">Product</h3>
                <ul class="list-unstyled">
                  <li><a href="#">Consumer</a></li>
                  <li><a href="#">Terms Condition</a></li>
                  <li><a href="#">Help & Faq</a></li>
                  <li><a href="#">Priceing</a></li>
                </ul>
              </div> -->
            </div>                  
          </div>
        </div>

        <div class="copyright">
          <ul class="social-links list-unstyled">
            <li class="nav-item"><a href="#"><i class="fab fa-twitter"></i></a></li>
            <li class="nav-item"><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
            <li class="nav-item"><a href="#"><i class="fab fa-github"></i></a></li>
          </ul>        
        </div>         
      </div>      
    </footer>
  </div>
</template>

<style>


</style>

<script>
var axios = require('axios')

export default {
  methods: {
    logout: function() {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("jwt");
      this.$router.push("/login");
    }
  }
}
</script>
