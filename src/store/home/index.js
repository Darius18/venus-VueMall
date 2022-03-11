import {reqCategoryList} from '@/api';//这个封装后的axios函数返回的是一个promise对象


const state = {
    categoryList:[]
};
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList;
    }
};
const actions = {
    //通过api里面的接口函数想服务器发送请求
    async categoryList(context){
        let result = await reqCategoryList(); //需要对promise对象进行解析(我还没学到)
        if(result.data.code==200){
            context.commit("CATEGORYLIST",result.data.data);
        }
    }
};
const getters= {};

export default{
    namespaced:true,//开启命名空间
    state,
    mutations,
    actions,
    getters
}