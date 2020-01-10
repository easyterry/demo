/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import VueSocketIO from 'vue-socket.io'

Vue.use(new VueSocketIO({
    debug: true,
    connection: `http://${window.location.host}:3000`
}))

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
