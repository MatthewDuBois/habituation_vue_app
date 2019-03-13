<template>
  <div class="habits">

    <h2>Here are your habits...</h2>


  </div>
</template>


<style>

</style>


<script>
import axios from "axios";

export default {
  data: function() {
    return {
      habit: {
                    habit_id: "",
                    name: "",
                    description: "",
                    active: "",
                    points: "",
                    routine_time_increment: "",
                    routine_time_quantity: "",
                    avatar_id: ""
                  },
      errors: []
    };
  },
}
</script>