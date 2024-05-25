import "bootstrap/dist/css/bootstrap.min.css"
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)
dom.watch();

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).component("font-awesome-icon", FontAwesomeIcon).mount('#app')

import "bootstrap/dist/js/bootstrap.min.js"
