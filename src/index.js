import { createApp } from 'vue/dist/vue.esm-bundler';

import App from './App.vue';
import router from './router';

const main = () => {
  createApp(App)
    .use(router)
    .mount('#app');
};

document.addEventListener('deviceready', main, false);
