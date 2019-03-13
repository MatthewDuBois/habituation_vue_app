import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Signup from "./views/Signup.vue";
import Habits from "./views/Habits.vue";
import HabitsEdit from "./views/HabitsEdit.vue";
import HabitsCreate from "./views/HabitsCreate.vue";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
          { path: '/', name: 'home', component: Home },
          { path: '/login', name: 'login', component: Login },
          { path: "/signup", name: "signup", component: Signup },
          { path: "/habits", name: "habits", component: Habits },
          { path: "/habits/:id/edit", name: "habits-edit", component: HabitsEdit },
          { path: "/habits/create", name: "habits-create", component: HabitsCreate }
          ]
})
