// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './APP.vue'
import vueResource from 'vue-resource'
import store from './store'
import router from './router'
import './common/stylus/fonts.styl'
import './mock/mockServer'

Vue.use(vueResource)
// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
