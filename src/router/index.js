import {createRouter, createWebHistory} from 'vue-router'
import HomeIoT from '../views/HomeIoT.vue'
import Electronique from '../views/Electronique.vue'
import Protocoles_comm from '../views/Protocoles_comm.vue'
import Cas_etudes from "@/views/Cas_etudes";
import Error404 from "@/views/Error404";

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: '/home',
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
  },
  {
    path: '/:catchAll(.*)',
    component: Error404
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
