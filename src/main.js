import Vue from 'vue'
import App from './App.vue'
import './style/icon.css' // 全局挂载图标组件

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
