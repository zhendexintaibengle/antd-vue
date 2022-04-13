<template>
        <!-- js/products.js -->

        <!-- 1.把粘过来的模板字符串格式改为vue的写法 -->
<div class="product" :id="p.lid">
            <router-link :to="`/product_details/${p.lid}`"><img :src="imgURL+p.pic" :alt="p.title"/></router-link>
            <div>
              <p>
                <span class="price">￥{{p.price}}</span>
                <router-link :to="`/product_details/${p.lid}`" class="title" :title="p.title">{{p.title}}</router-link>
                </p>
              <div>
                <span class="reduc lf">-</span><input type="text" value="1" class="lf"/><span class="add lf">+</span>
                <div class="addcart">
                  加入购物车
                </div>
              </div>
            </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
// 提示:只要在products中,遍历返回的数据,复用当前组件,传入是数据即可
    export default {
      // 获取vue中保存的图片前缀域名
        computed:{...mapState(["imgURL"])},
        // 复用时接收参数
        props:["p"],
    }
</script>

<style lang="scss" scoped>
// @import "../assets/css/products.css";
</style>
<style scoped src="../assets/css/products.css"></style>