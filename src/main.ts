import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
// import "mock.js"
import App from './App.vue'
import router from './router'
// import store from './store'
import vuex from "vuex"
import axios from 'axios';
if (process.env.NODE_ENV === 'development') {
    // require('./mock')
};
// if (process.env.VUE_APP_MOCK && process.env.NODE_ENV === 'development') {
//     require("../mock");
// }
const app = createApp(App)





app.use(ElementPlus)
app.use(router)
// app.use(store)
app.mount('#app')

// createApp(App).mount('#app')
