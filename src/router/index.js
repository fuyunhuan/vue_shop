import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login.vue'

Vue.use(VueRouter)
const routes = [
  // 自动重定向
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/Login',
    component: Login
  }
]
const router = new VueRouter({
  routes
})
export default router
