import Vue from "vue";
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Home from  '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'

let originPush = VueRouter.prototype.push;
//重写push方法
VueRouter.prototype.push = function(location, resolve, reject){
    if(resolve && reject){originPush.call(this,location,resolve,reject)}
    else{originPush.call(this,location,()=>{},()=>{console.log("不要重复访问呜呜~")})}
}

export default new VueRouter({
    routes:[
        {
            path:"/home",
            component:Home,
            meta:{
                showFoot:true
            }
        },
        {
            path:"/login",
            component:Login,
            meta:{
                showFoot:false
            }
        },
        {
            path:"/register",
            component:Register,
            meta:{
                showFoot:false
            }
        },
        {
            path:"/search/:searchWord?",//路由传参
            component:Search,
            meta:{
                showFoot:true
            },
            name:"search"
        },
        {
            path:"*",
            redirect:'/home'
        }
    ]
})