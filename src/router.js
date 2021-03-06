import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Signup from "./views/Signup.vue";
import Habits from "./views/Habits.vue";
import HabitsEdit from "./views/HabitsEdit.vue";
import HabitsCreate from "./views/HabitsCreate.vue";
import Logout from './views/Logout.vue';
import AvatarHome from './views/AvatarHome.vue';
import AvatarEdit from './views/AvatarEdit.vue';
import LevelUp from './views/LevelUp.vue';
import Specials from './views/Specials.vue';
import Shop from './views/Shop.vue';


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
          { path: '/', name: 'home', component: Home },
          { path: '/login', name: 'login', component: Login },
          { path: '/logout', name: 'logout', component: Logout },
          { path: "/signup", name: "signup", component: Signup },
          { path: "/habits", name: "habits", component: Habits },
          { path: "/habits/:id/edit", name: "habits-edit", component: HabitsEdit },
          { path: "/habits/create", name: "habits-create", component: HabitsCreate },
          { path: "/avatarhome", name: "avatar-home", component: AvatarHome },
          { path: "/avataredit", name: "avatar-edit", component: AvatarEdit },
          { path: "/levelup", name: "level-up", component: LevelUp },
          { path: "/specials", name: "specials", component: Specials },
          { path: "/shop", name: "shop", component: Shop }
          ]
})
