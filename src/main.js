// Vue 2:
// import Vue from "vue"


import { createApp } from 'vue'
import App from './App.vue'

// Original
// createApp(App).mount('#app')

// Can be written as below:
const app = createApp(App)
// console.log(app) // not a Vue object anymore
// Vue 2: const vm = new Vue({render: h => h(App)})

app.mount("#app")

// Vue 2: vm.$mount("#app")