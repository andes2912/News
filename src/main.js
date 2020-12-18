import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import axios from 'axios'

//import Bootstrap, Popper, jQuery
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.min'
import 'popper.js/dist/popper.min'
import 'bootstrap/dist/js/bootstrap.min'

Vue.config.productionTip = true

// axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.get['Content-Type'] ='application/x-www-form-urlencoded';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
