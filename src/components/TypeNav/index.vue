<template>
        <!-- 商品分类导航 -->
        <div class="type-nav">
            <div class="container">
                <h2 class="all">全部商品分类</h2>
                <nav class="nav">
                    <a href="###">服装城</a>
                    <a href="###">美妆馆</a>
                    <a href="###">尚品汇超市</a>
                    <a href="###">全球购</a>
                    <a href="###">闪购</a>
                    <a href="###">团购</a>
                    <a href="###">有趣</a>
                    <a href="###">秒杀</a>
                </nav>
                <div class="sort">
                    <div class="all-sort-list2" @click="goSearch">
                        <!-- 最后:class的含义是当两个数相等，class就赋值为cur -->
                        <div class="item" v-for="(c1,index) in categoryList" :key = "c1.categoryId" :class="{cur:indexNowOn==index}" @mouseenter="changeIndex(index)" @mouseleave="indexNowOn = -1">
                            <h3 >
                                <a onclick=" return false; " href="" :data-categoryName="c1.categoryName" :data-category1Id = "c1.categoryId">{{index+1}}  {{c1.categoryName}}</a>
                            </h3>
                            <!-- 二级、三级分类 -->
                            <div class="item-list clearfix" :style="{display:indexNowOn==index?'block':'none'}">
                                <div class="subitem" v-for="c2 in c1.categoryChild" :key="c2.categoryId">
                                    <dl class="fore">
                                        <dt>
                                            <a href="" :data-categoryName="c2.categoryName" :data-category2Id = "c2.categoryId">{{c2.categoryName}}</a>
                                        </dt>
                                        <dd>
                                            <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                                                <a href="" :data-categoryName="c3.categoryName" :data-category3Id = "c3.categoryId">{{c3.categoryName}}</a>
                                            </em>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  
</template>

<script>

import {mapState} from 'vuex';
// 从lodash库中按需引用 后面用来节流
import {throttle} from 'lodash';
export default {
    name:"TypeNav",
    //组件挂在完毕，就向服务器发请求
    data(){
        return{
            indexNowOn:-1 //现在鼠标在哪个index上
        }
    },
    mounted(){
        // 通知vuex发送请求，获取数据存储在仓库中
        this.$store.dispatch('home/categoryList')
    },
    computed:{
        ...mapState({
            categoryList:state=>state.home.categoryList //这里的state是包含所有的大仓库
        })
    },
    methods:{
        //鼠标移上去响应式修改index
        //加节流的操作：我不希望用户划的过快，还未确定下来的时候就给他目录，所以使用节流。
        changeIndex:throttle(function(index){
            this.indexNowOn = index
        },100),
        // 编程式导航+事件委托 实现点击跳转路由
        goSearch:function(event){

            //categoryname用来识别点击的是a标签，而不是h3等
            //category*id用来识别层级
            console.log(event.target)
            let element = event.target;
            console.log(element.dataset);
            let {categoryname, category1id, category2id, category3id} = element.dataset 
            /**
             * ↑注意：
             * （1）模板解析语法
             * （2）注意html中的驼峰在dataset中的属性会变成小写）
             * （3）定义属性的时候需要在前面加上data- 才能被dataset函数发现
             */
            console.log("hhh"+categoryname)
            if(categoryname){
                let location = {name:'search'};
                let query = {categoryName:categoryname}
                if(category1id){
                    query.category1Id = category1id
                }else if(category2id){
                    query.category2Id = category2id
                }else{
                    query.category3Id = category3id
                }
                location.query = query;
                console.log(this.$router);
                console.log(query)
                // this.$router.push(location)
            }
             
        }
    }
}
</script>

<style lang="less" scoped>
    .type-nav {
        .cur{
            background-color: pink;
        }
        border-bottom: 2px solid #e1251b;

        .container {
            width: 1200px;
            margin: 0 auto;
            display: flex;
            position: relative;

            .all {
                width: 210px;
                height: 45px;
                background-color: #e1251b;
                line-height: 45px;
                text-align: center;
                color: #fff;
                font-size: 14px;
                font-weight: bold;
            }

            .nav {
                a {
                    height: 45px;
                    margin: 0 22px;
                    line-height: 45px;
                    font-size: 16px;
                    color: #333;
                }
            }

            .sort {
                position: absolute;
                left: 0;
                top: 45px;
                width: 210px;
                height: 461px;
                position: absolute;
                background: #fafafa;
                z-index: 999;

                .all-sort-list2 {
                    .item {
                        h3 {
                            line-height: 30px;
                            font-size: 14px;
                            font-weight: 400;
                            overflow: hidden;
                            padding: 0 20px;
                            margin: 0;

                            a {
                                color: #333;
                            }
                        }

                        .item-list {
                            display: none;
                            position: absolute;
                            width: 734px;
                            min-height: 460px;
                            background: #f7f7f7;
                            left: 210px;
                            border: 1px solid #ddd;
                            top: 0;
                            z-index: 9999 !important;

                            .subitem {
                                float: left;
                                width: 650px;
                                padding: 0 4px 0 8px;

                                dl {
                                    border-top: 1px solid #eee;
                                    padding: 6px 0;
                                    overflow: hidden;
                                    zoom: 1;

                                    &.fore {
                                        border-top: 0;
                                    }

                                    dt {
                                        float: left;
                                        width: 54px;
                                        line-height: 22px;
                                        text-align: right;
                                        padding: 3px 6px 0 0;
                                        font-weight: 700;
                                    }

                                    dd {
                                        float: left;
                                        width: 415px;
                                        padding: 3px 0 0;
                                        overflow: hidden;

                                        em {
                                            float: left;
                                            height: 14px;
                                            line-height: 14px;
                                            padding: 0 8px;
                                            margin-top: 5px;
                                            border-left: 1px solid #ccc;
                                        }
                                    }
                                }
                            }
                        }
                        //这个效果用js写了，用来锻炼v-show
                        // &:hover {
                        //     .item-list {
                        //         display: block;
                        //     }
                        // }
                    }
                }
            }
        }
    }

</style>