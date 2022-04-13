<template>
    <div>
        <!-- 路由切换的组件,如何使用? -->
        <!-- 先配置与路径的对应关系,自动替换掉router-view -->
        <!-- 路由切换的组件命名不需要考虑重名,因为其使用不用和普通组件一样书写 -->
            <!-- banner部分-->
    <div class="store">
      <img src="http://www.codeboy.com:9999/img/index/index_guild.png" />
    </div>

    <!--笔记本电脑列表-->
    <div class="store_action">
      <div class="store_action_left">
        <div class="store_action_left_content">
          <div id="plist">
            <div class="salc_top">笔记本电脑</div>
            <div class="salc_content">
              <!-- 网络请求完成前，显示动画 -->
              <img
              v-if="data==null"
                class="loading"
                src="http://www.codeboy.com:9999/img/loading.gif"
              />
              <!-- 请求完毕后，显示 -->
              <template v-else>
                <!--  -->
                <product-item v-for="x in data.data" :key="x.lid" :p="x"/>
              </template>
            </div>
            <!--分页条-->
            <div class="pages" v-if="data">
              <span @click="getData(data.pno-1)" :class="{disabled:data.pno==1}">上一页</span>
              <span @click="getData(p)" :class="{cur:data.pno==p}" v-for="p in data.pageCount" :key="p">{{p}}</span>
              <!-- 下一页样式 -->
              <span @click="getData(data.pno+1)" :class="{disabled:data.pno==data.pageCount}">下一页</span>
            </div>
          </div>
        </div>
      </div>
      <div class="store_action_right rt">
        <div class="store_action_right_top">
          <p>
            <img
              src="http://www.codeboy.com:9999/img/foodstore/foodstore_icon2.png"
              alt=""
            />商家公告
          </p>
          <div>
            <p>本店推出全网最低价套餐，保证比其他平台的价格要低！</p>
            <p>不要葱、姜、蒜等这些忌口暂时无法坐不了，敬请谅解！</p>
            <p>晚上10点以后订餐需另加送餐费2元！谢谢合作！</p>
          </div>
        </div>
        <div class="store_action_right_cart">
          <div class="store_action_right_cart_top">
            购物车 <span class="clear rt">清空</span>
          </div>
          <div class="store_action_right_cart_content">
            <div></div>
            <!--<div id="5">-->
            <!--<span>精选双人餐</span>-->
            <!--<div><span class="cart_reduc lf">-</span><input type="text" value="1" class="lf"/><span class="cart_add lf">+</span></div>-->
            <!--<span class="rt pc">￥:<span class="cart_unit_price">20.00</span></span>-->
            <!--</div>-->
          </div>
          <div class="sarc">
            <div class="total_price lf">
              <img
                src="http://www.codeboy.com:9999/img/foodstore/foodstore_car_2.png"
                alt=""
              />￥:<span>0.00</span>
            </div>
            <div class="settle lf">
              <a href="cart.html" style="color: #fff">去结算</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue';
    export default {
      // 通过props
      // props:["kw"],
  components: { ProductItem },
        // 发请求:data methods mounted
        // 属性的精确配置
        // 场景：如果输入框是空的，跳转时kw没有值，则默认是undefined
        props: {
          kw: {
            type: String,
            default:"",
          },
        },
        data() {
            return {
                data: null
            }
        },
        mounted () {
           this.getData(1);
        },
        watch: {
          kw() {
            this.getData(1);
          }
        },
        methods: {
            getData(pno) {
                const url=`product/list.php?pno=${pno}&kw=${this.kw}`;
                this.axios.get(url).then(res=>{
                    this.data=res.data;
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
// @import "../assets/css/products.css";
.pages{
  user-select: none;
  padding: 10px;
  background-color: #eee;
  text-align: right;
  span{
    border-radius: 3px;
    border: 1px solid gray;
    padding: 5px 10px;
    display: inline-block;
    color: #0aa1ed;
    margin-left: 4px;
    &.cur{
      background-color: #0aa1ed;
      color: white;
    }
    &.disabled{
      color: lightgray;
      // 指针-事件：无；去掉鼠标事件
      pointer-events: none;
    }
  }
}
</style>
<style scoped src="../assets/css/products.css"></style>