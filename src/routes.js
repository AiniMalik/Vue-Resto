import HomeVue from './components/HomeVue.vue'
import SignUp from './components/SignUp.vue'
import Login from './components/LogIn.vue'
import AddResto from './components/AddResto.vue'
import  UpdateResto from './components/UpdateResto.vue'
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    name: "Home",
    component: HomeVue,
    path: "/",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/signup",
  },
  {
    name: "Login",
    component: Login,
    path: "/login",
  },
  {
    name: "AddResto",
    component: AddResto,
    path: "/addResto",
  },
  {
    name: "UpdateResto",
    component: UpdateResto,
    path: "/updateResto/:id",
  }
];
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router