import Vue from 'vue';
import Card from '@/modules/moduleB/components/Card.vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.component('Card', Card);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
