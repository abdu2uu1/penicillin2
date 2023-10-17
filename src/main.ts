
import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import i18n from './plugins/i18n'
import { Icon } from '@iconify/vue';
import './assets/style/main.scss'
import router from './router/index'
import emitter from './plugins/emitter'
import { createPinia } from 'pinia'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import Vue3Lottie from 'vue3-lottie'
const pinia = createPinia()
loadFonts()
createApp(App)
.use(pinia)
.component('Icon', Icon)
.use(emitter)
.use(vuetify)
.use(router)
  .use(i18n)
  .use(Vue3Lottie, { name: "Vue3Lottie" })
.component('VueDatePicker', VueDatePicker)
  .mount('#app')
