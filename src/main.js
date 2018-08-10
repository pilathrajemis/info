import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Require the main Sass manifest file
import './assets/sass/main.scss';
import './assets/sass/style.scss';

import router from './router'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
