import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dome from '../views/dome/dome.vue'
import Echarts from '../views/ECharts/echarts.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    component: Dome
  },
  {
    path: '/echarts',
    component: Echarts
  }
]

const router = new VueRouter({
  routes
})

export default router
