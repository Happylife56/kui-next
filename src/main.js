import { createApp } from 'vue';
// eslint-disable-next-line import/no-unresolved
import KUI from 'kui-next';
import router from './router';
import App from './App.vue';

console.log('kUI: ', KUI);
createApp(App).use(router).mount('#app');
