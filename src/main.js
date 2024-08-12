import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper-bundle.mjs'

createApp(App).use(router).mount('#app')
router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
})
