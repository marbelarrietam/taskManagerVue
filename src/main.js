import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';



Vue.use(BootstrapVue);

Vue.use(axios);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  render: h => h(App)
})
