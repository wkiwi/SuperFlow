/*
 * @Author: wkiwi
 * @Email: w_kiwi@163.com
 * @Date: 2022-03-28 14:40:04
 * @LastEditors: wkiwi
 * @LastEditTime: 2022-03-29 11:10:45
 */
import Vue from 'vue'
import App from './App'
import SuperFlow from '../packages/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(SuperFlow)

Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  render: h => h(App),
}).$mount('#app')
