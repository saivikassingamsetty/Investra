import {createApp} from 'vue'
import {createPinia} from 'pinia'
import './index.css'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import {library} from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {faUserSecret, fas} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, fas)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

export const pinia = createPinia()
app.use(pinia)
app.use(router)

app.mount('#app')
