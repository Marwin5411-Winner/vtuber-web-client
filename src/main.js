import Vue from 'vue'
import App from './App.vue'
import VueClazyLoad from 'vue-clazy-load';
import './index.css'


Vue.use(VueClazyLoad);



Vue.config.productionTip = true

new Vue({
  render: h => h(App),
}).$mount('#app')
