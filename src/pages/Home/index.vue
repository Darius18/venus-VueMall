<template>
  <div>
    <button @click="add()">点我加1！</button>
    <span>仓库的数据{{count}}</span>
    <button>点我减1！</button>
      <TypeNav></TypeNav>
      <ListContainer></ListContainer>
      <Recommend></Recommend>
      <Rank></Rank>
  </div>
</template>

<script>

import ListContainer from '@/pages/Home/ListContainer'
import Recommend from '@/pages/Home/Recommend'
import Rank from '@/pages/Home/Rank'

import {mapState} from 'vuex';//vuex的辅助函数

export default {
  name:"home",
  components:{ListContainer,Recommend,Rank},
  computed:{
    ...mapState(['count'])//对象展开运算符，将mapstate对象混入computed中
  },
  methods:{
    add(){
      this.$store.dispatch('addMYcount')
    }
  }
}
</script>

<style>

</style>