import axios from "axios";
import nprogress from "nprogress"; //引入进度条插件
import "nprogress/nprogress.css" //引入进度条样式
/**
 * 重新封装了axios
 * 主要是为了利用发送和请求拦截器
 */
var requests = axios.create({
    baseURL:'/api',
    timeout: 5000
})

requests.interceptors.request.use(function(config){
    nprogress.start()//进度条开始
    return config
})

requests.interceptors.response.use(function(response){
    nprogress.done()//进度条结束
    return response
}, function(error){
    return Promise.reject(error)
})

export default requests;