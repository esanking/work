import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from './router';
import 'bootstrap';

const app = createApp(App);
app.config.globalProperties.$axios = axios;
app.use(router).use(VueAxios, axios);
app.mount('#app');
