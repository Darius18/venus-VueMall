module.exports = {
    //关闭eslint
    lintOnSave:false,
    //设置一个代理服务器，实现跨域
    devServer:{
        proxy:{
            '/api':{
                target:'http://39.98.123.211',
                // pathRewrite:{'^/api':''}
            }
        }
    }
}