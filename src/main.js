import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueObserveVisibility from 'vue-observe-visibility'
// import axios from 'axios'

//import Bootstrap, Popper, jQuery
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.min'
import 'popper.js/dist/popper.min'
import 'bootstrap/dist/js/bootstrap.min'


Vue.use(VueObserveVisibility)
Vue.config.productionTip = false
// axios.defaults.baseURL = process.env.VUE_APP_BASE_URL

// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
// axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET';
// axios.defaults.headers.common['Access-Control-Allow-Headers'] ='authorization, x-api-key';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
