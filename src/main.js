import Vue from 'vue'
import App from './App'
import router from './router'

// 重置全局样式
import './assets/css/reset.css'

// 引入vuex
import store from './vuex/index.js'

// 引入axios
import axios from 'axios'
Vue.prototype.$axios = axios

// 引入UI
import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iView)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
