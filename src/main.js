import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import './assets/styles/main.css';

const app = createApp(App);

app.config.errorHandler = (err, instance, info) => {
  console.error('[VUE ERROR]', err, info);
};

// Image fallback directive to ensure images never break
app.directive('fallback', {
  mounted(el, binding) {
    el.addEventListener('error', () => {
      const fallbackSrc = binding.value || '/images/gen_dentist-examining-patients-teeth-close-up_1.jpg';
      if (el.src !== fallbackSrc) {
        el.src = fallbackSrc;
      }
    });
  }
});

app.use(router);
app.mount('#app');
