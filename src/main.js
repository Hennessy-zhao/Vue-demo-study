import { createApp } from 'vue'
import App from './App.vue'

//导入element模块
import 'element-plus/dist/index.css'  // 引入 ElementPlus 组件样式

import ElementPlus from 'element-plus';   // 引入 ElementPlus 组件


//导入vue-axios模块
import VueAxios from 'vue-axios'
import axios from 'axios'

const app = createApp(App)

app.use(ElementPlus)  // 全局挂载 ElementPlus

app.use(VueAxios,axios)

app.mount('#app')
