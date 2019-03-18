<template>
  <div id="app">
      <nav class="navbar navbar-expand-md navbar-light bg-faded cripto_nav">
        <div class="container">
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>
            <a class="navbar-brand" href="index-02.html"><img src="html/images/logo.png" alt="logo"></a>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item"><a data-scroll href="#header-01" class="nav-link active">Home</a></li>
                    <li class="nav-item"><a data-scroll href="#about_cryptonic_01" class="nav-link">About</a></li>
                    <li class="nav-item"><a data-scroll href="#token_sale_01" class="nav-link">Token Sale</a></li>
                    <li class="nav-item"><a data-scroll href="#roadmap_01" class="nav-link">Roadmap</a></li>
                    <li class="nav-item"><a data-scroll href="#team_membar_01" class="nav-link">Team</a></li>                    
                    <li class="nav-item"><a data-scroll href="#faq-area-01" class="nav-link">Faq</a></li>
                    <li class="nav-item"><a data-scroll href="#subscribe_area_01" class="nav-link">Contact</a></li>
                </ul>
            </div>
            <div class="language">
                <a href="#" class="token active">Sign Up</a>
                <a href="#" class="token">Login</a>
            </div>
        </div>
    </nav>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

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
