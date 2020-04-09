import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

import VueLazyload from 'vue-lazyload'

import '@/styles/reset.css';
import '@/styles/index.scss';

Vue.config.productionTip = false

Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 3,
  observer: true,
  /*
  observerOptions: {
    rootMargin: '0px',
    threshold: 0.1
  }
  */
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
