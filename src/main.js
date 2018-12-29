import Vue from 'vue'
import App from './App'
import router from './router'

import 'element-ui/lib/theme-chalk/index.css';
import util from './assets/js/util.js'
import http from './assets/js/http.js'
import Bus from './eventBus.js'
import store from './assets/js/storage.js'
import echarts from 'echarts'

Vue.use(router);

import ElementUI from 'element-ui';
Vue.use(ElementUI);

Vue.prototype.$util = util;
Vue.prototype.$http = http;
Vue.prototype.$Bus = Bus;
Vue.prototype.$store = store;
Vue.prototype.$echarts=echarts

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
