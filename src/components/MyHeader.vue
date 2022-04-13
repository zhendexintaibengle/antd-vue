<template>
    <div class="my-header">
        <!-- 页面顶部-->
<header id="top">
  <div id="logo" class="lf">
    <router-link to="/">
      <img
        class="animated jello"
        src="http://www.codeboy.com:9999/img/header/logo.png"
        alt="logo"
      />
    </router-link>
  </div>
  <div id="top_input" class="lf">
    <input
      @keyup.enter="goP"
      v-model="kw"
      id="input"
      class="input-kw"
      type="text"
      placeholder="请输入您要搜索的内容"
    />
    <div class="seek" tabindex="-1">
      <div class="actived">
        <span>分类搜索</span>
        <img
          src="http://www.codeboy.com:9999/img/header/header_normal.png"
          alt=""
        />
      </div>
      <div class="seek_content">
        <div id="xxyp">学习用品</div>
        <div id="srdz">私人订制</div>
      </div>
    </div>
    <router-link :to="`/products/${kw}`" class="rt"><img
        id="search"
        src="http://www.codeboy.com:9999/img/header/search.png"
        alt="搜索"
    /></router-link>
  </div>
  <div class="rt">
    <ul class="lf">
      <li>
        <a href="my_collect.html" title="我的收藏"
          ><img
            class="care"
            src="http://www.codeboy.com:9999/img/header/care.png"
            alt="" /></a
        ><b>|</b>
      </li>
      <li>
        <a href="lookforward.html" title="用户中心"
          ><img
            class="order"
            src="http://www.codeboy.com:9999/img/header/order.png"
            alt="" /></a
        ><b>|</b>
      </li>
      <li>
        <a href="cart.html" title="我的购物车"
          ><img
            class="shopcar"
            src="http://www.codeboy.com:9999/img/header/shop_car.png"
            alt="" /></a
        ><b>|</b>
      </li>
    </ul>
    <!-- uname的值是null,代表未登录， -->
    <ul class="lf login_info" v-if="uname==null">
      <li><router-link to="/register" title="注册新用户">&nbsp;注册</router-link><b>|</b></li>
      <li><router-link to="/login" title="用户登录">登录</router-link></li>
    </ul>
<!-- 否则显示欢迎doudou -->
    <ul class="lf login_info" v-else>
      <li>
        <a>欢迎：{{uname}}</a>
        <span>|</span>
        <!--  -->
        <button @click="updateUname(null)">退出</button>
      </li>
      <li>
        <a>用户中心</a>
      </li>
    </ul>
  </div>
</header>
<!-- nav主导航-->
<nav id="nav">
  <ul>
    <li><a href="index.html">首页</a></li>
    <li><a href="lookforward.html" class="activ">学习用品</a></li>
    <li><a href="lookforward.html">私人定制</a></li>
  </ul>
</nav>

    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
    export default {
      // 利用辅助函数mapState把共享的uname引入到此处
      computed:{...mapState(["uname"])},
      data() {
        return {
          kw: "",//配合双向绑定使用，与输入框数据联动
        }
      },
        methods: {
          ...mapMutations(["updateUname"]),
          goP() {
            const path=`/products/${this.kw}`
            if(this.$route.path==path)return
            this.$router.push(path)
          },
        },
    }
</script>

<style lang="scss" scoped>

</style>