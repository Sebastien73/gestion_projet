import { createRouter, createWebHashHistory } from 'vue-router'
import HomeIoT from '../views/HomeIoT.vue'
import Electronique from '../views/Electronique.vue'
import Protocoles_comm from '../views/Protocoles_comm.vue'
import Cas_etudes from "@/views/Cas_etudes";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeIoT
  },
  {
    path: '/electronique',
    component: Electronique
  },
  {
    path: '/protocoles',
    component: Protocoles_comm
  },
  {
    path: '/cas_etudes',
    component: Cas_etudes
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
