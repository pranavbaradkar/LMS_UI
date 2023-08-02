import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueCountryCode from "vue-country-code-select";
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import { router } from './router/index';

Vue.config.productionTip = false

Vue.use(VueCountryCode)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
