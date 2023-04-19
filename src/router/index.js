import Vue from 'vue'
import VueRouter from 'vue-router'
import User from '../views/User.vue'
import Header from '../components/Header'
import CaiHistory from "../views/CaiHistory";
import DingHistory from "../views/DingHistory";
import Prediction from "../views/Prediction";
import CaiSet from "../views/CaiSet";
import DingSet from "../views/DingSet";
import CaiUpdate from "../views/CaiUpdate";
import DingUpdate from "../views/DingUpdate";

Vue.use(VueRouter)

const routes = [
  {
    path: "/user",
    component: () => import("@/views/User.vue")
  },
  {
    path: "/DingHistory",
    component: () => import("@/views/DingHistory.vue")
  },
  {
    path: "/CaiHistory",
    component: () => import("@/views/CaiHistory.vue")
  },
  {
    path: "/",
    component: () => import("@/views/Prediction.vue")
  },
  {
    path: '/echarts',
    component: () => import("@/components/Echarts")
  },
  {
    path: "/DingSet",
    component: () => import("@/views/DingSet.vue")
  },
  {
    path: "/CaiSet",
    component: () => import("@/views/CaiSet.vue")
  },
  {
    path: "/CaiUpdate",
    component: () => import("@/views/CaiUpdate.vue")
  },
  {
    path: "/DingUpdate",
    component: () => import("@/views/DingUpdate.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
