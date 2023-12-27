import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './axios'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-green/theme.css';
import Button from "primevue/button"
import PanelMenu from 'primevue/panelmenu';
import Card from 'primevue/card';


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.component('Button', Button)
app.component('PanelMenu', PanelMenu)
app.component('card', Card)

app.mount('#app')
