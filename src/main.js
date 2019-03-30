import Vue from 'vue'
import App from './App.vue'
import store from './store/index'


import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
