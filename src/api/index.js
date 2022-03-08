import requests from './request'
/**
 * 统一进行接口管理
 */


//三级联动目录接口
export const reqCategoryList = ()=>{
    return requests({url:"product/getBaseCategoryList",method:"get"})
}