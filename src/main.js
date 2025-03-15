import { createApp } from 'vue'
import App from './App.vue'
// 如果直接使用 Bootstrap 的預編譯 CSS：
import 'bootstrap/dist/css/bootstrap.min.css'
// 如果使用自定義 SCSS，則從 resources 中引入
import '@assets/scss/main.scss'

createApp(App).mount('#app')
