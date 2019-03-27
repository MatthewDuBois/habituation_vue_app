<template>
  <div class="login">
<!--     <div id="loader-wrapper">
        <div id="loader"></div>
        <div class="loader-section section-left"></div>
        <div class="loader-section section-right"></div>
    </div>  --> 

    <div class="col-sm-4">
    <div class="container-login">
      <br>
      <br>
      <br>
      <br>
      <form v-on:submit.prevent="submit()">
        <h1>Login</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email">
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password">
        </div>
        <div class="button_login">
          <input type="submit" class="btn btn-primary" value="Submit">
        </div>
      </form>
    </div>
    </div>
    <div class="pic">
      <div class="col-sm-8">
        <p></p>
        <img class="skygif" src="images/skyline.gif">
      </div>
    </div>
  </div>
</template>

<style>

.skygif{
  width: 700px;
  height: 500px;
}

.pic{
 display: flex;
 padding-left: 900px;

}



.container-login{
  padding-left: 200px;
}
  
</style>

<script>
import axios from "axios";

export default {
  template: "#login-page",
  data: function() {
    return {
      email: "",
      password: "",
      avatar_id: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password,
        avatar_id: this.avatar_id
      };
      axios.post("/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("avatar_id", response.data.avatar_id);

          this.$router.push("/avatarhome");
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    }
  }
};
</script>
