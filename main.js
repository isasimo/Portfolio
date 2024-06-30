// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

createApp(App).use(router).mount('#app');

// Example DOM manipulation after Vue is mounted
// Might not be needed and can't be potentially delated
/* app.nextTick(() => {
    const ticker = document.querySelector('.ticker');
    const list = document.querySelector('.ticker__list');
    if (ticker && list) {
        const clone = list.cloneNode(true);
        ticker.append(clone);
    }
}); */