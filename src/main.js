import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import axios from '@/utils/axios.js';

Vue.prototype.$axios = axios;

Vue.use(ViewUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
