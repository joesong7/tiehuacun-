import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.config.productionTip = false
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueCookies from 'vue-cookies'
import '../node_modules/swiper'


new Vue({
  vuetify,
  router,
  axios,
  VueAxios,
  VueAwesomeSwiper,
  VueCookies,
  render: h => h(App)
}).$mount('#app')
