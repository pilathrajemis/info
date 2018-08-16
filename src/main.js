import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Require the main Sass manifest file
import './assets/sass/main.scss';
import './assets/sass/style.scss';

import router from './router'
import store from './vuex/store'
import VueResource from 'vue-resource'

Vue.use(VueResource)
// set the API root so we can use relative url's in our actions.
Vue.http.options.root = 'http://localhost:1234'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
