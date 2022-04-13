<template>
  <div>
    <my-header v-show="$route.meta.hide_header !=true"/>
    

    给i他
    <!-- 路由占位符：会根据路径切换成对应的组件 -->
    <router-view/>
    <my-footer/>
  </div>


</template>

<script>

import MyFooter from './components/MyFooter.vue'
import MyHeader from './components/MyHeader.vue'
  export default {
  components: { MyHeader, MyFooter },
    
  }
</script>

<style lang="scss" scoped></style>
<style src="./assets/css/base.css"></style>
<style src="./assets/css/animate.css"></style>