<template>
  <div class="habits">

    <h2>Here are your habits...</h2>
    <div v-for="habit in habits">
      <div class="container">
        <h1> {{ habit.name }}</h1>
      </div>
    </div>


  </div>
</template>


<style>

</style>


<script>
import axios from "axios";

export default {
  data: function() {
    return {
        habits: [],

      // habit: {
      //               habit_id: "",
      //               name: "",
      //               description: "",
      //               active: "",
      //               points: "",
      //               routine_time_increment: "",
      //               routine_time_quantity: "",
      //               avatar_id: ""
      //             },
      errors: []
    };
  },
  created: function() {
    axios.get("/api/habits/")
      .then(response => {
        this.habits = response.data;
      })
  },
}
</script>