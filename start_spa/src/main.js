import Vue from 'vue'
import App from './App.vue'

import store from './store';
import router  from "./router"

new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
})

import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'