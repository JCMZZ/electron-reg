import Vue from 'vue'
import { http } from '@api/axios.config'
import api from '@api'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/element-variables.scss'
import md5 from 'js-md5';
import DefaultConfig from './assets/js/default.config'

import App from './App'
import router from './router'
import store from './store'
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = http
Vue.api = Vue.prototype.$api = api
Vue.md5 = Vue.prototype.$md5 = md5;
Vue.config.productionTip = false
Vue.config.devtools = false
Vue.use(ElementUI);
Vue.use(DefaultConfig, [ElementUI]);

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
