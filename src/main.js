import Vue from 'vue'
import App from './App.vue'

//注册全局组件，全局注册的行为必须在根 Vue 实例 (通过 new Vue) 创建之前发生
import TypeNav from "@/pages/Home/TypeNav"
Vue.component(TypeNav.name, TypeNav)

//测试 获取目录的请求
import {reqCategoryList} from '@/api';
reqCategoryList();



Vue.config.productionTip = false

import router from './router'

//引入仓库
import store from '@/store'

new Vue({
  render: h => h(App),
  router, //kv一致只写一个
  //注册路由
  store,//注册仓库，多了一个$store属性
}).$mount('#app')
