import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import instance from './utils/request'

// 导入自定义全局轻提示组件
import toastRegistry from './components/toast/toast.js'
Vue.use(toastRegistry)

// 往vue原型添加方法：axios请求方法
Vue.prototype.$axios = instance

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
