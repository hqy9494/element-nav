import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(VueRouter).use(ElementUI);


new Vue({
  mode: 'history',
  render: h => h(App),
  router,
  el: '#app',
  store
})
