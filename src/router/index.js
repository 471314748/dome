import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dome from '../views/dome/dome.vue'
import Echarts from '../views/ECharts/echarts.vue'
import Share from '../views/share/share.vue'
import Weixin from '../views/weixin'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/weixin',
    name: 'Weixin',
    component: Weixin
  },
  {
    path: '/',
    component: Dome
  },
  {
    path: '/echarts',
    component: Echarts
  },
  {
    path: '/share',
    component: Share
  }
]

const router = new VueRouter({
  routes
})

export default router
