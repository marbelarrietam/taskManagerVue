import Vue from 'vue';
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import routes from './routes'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';



Vue.use(BootstrapVue);

Vue.use(VueRouter);
const router = new VueRouter({ routes })

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
