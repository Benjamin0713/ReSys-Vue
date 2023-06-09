import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/user",
    component: () => import("@/views/User.vue")
  },
  {
    path: "/movie",
    component: () => import("@/views/Movie.vue")
  },
  {
    path: "/rate",
    component: () => import("@/views/Rate.vue")
  },
  {
    path: "/",
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/result",
    component: () => import("@/views/Result.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
