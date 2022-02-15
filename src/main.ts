import { createApp} from 'vue'
import App from './App.vue'
import router from './router'
import { store,key } from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons-vue'
import axios from 'axios'
import Vue from 'vue'
import 'nprogress/nprogress.css'

const app = createApp(App);


app.use(store,key)
    .use(router)
    .use(ElementPlus)
    .mount('#app')

Object.keys(Icons).forEach((key) => {
    app.component(key,Icons[key as keyof typeof Icons])
});
