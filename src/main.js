/* eslint-disable */

import {
    createApp
} from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import 'primeicons/primeicons.css';
import VueConfetti from 'vue-confetti'
import 'primeflex/primeflex.css';
// import '@/assets/theme.css'
import '@/assets/theme4.css';
import ToastService from 'primevue/toastservice';
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import {
    library
} from '@fortawesome/fontawesome-svg-core'
import {
    fas
} from '@fortawesome/free-solid-svg-icons'
import {
    FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

library.add(fas)

import {
    createVuetify
} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})


const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(PrimeVue);
app.use(router);
app.use(ToastService);
app.use(vuetify);
app.use(Toast, {
    maxToasts: 1,

})
app.use(VueConfetti)
app.mount("#app");