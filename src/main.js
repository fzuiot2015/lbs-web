import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import util from './assets/js/util.js'
import http from './assets/js/http.js'
import Bus from './eventBus.js'

Vue.use(ElementUI);

Vue.prototype.$util = util;
Vue.prototype.$http = http;
Vue.prototype.$Bus = Bus;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
