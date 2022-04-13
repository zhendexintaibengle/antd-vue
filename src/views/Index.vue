<template>
  <div v-if="data">
    <!-- index.html -->
    <!-- banner部分-->
    <swiper @mouseout.native="startPlay"  @mouseover.native="stopPlay" ref="swiper" class="swiper" :options="swiperOption">
      <swiper-slide v-for="c in data.carouselItems" :key="c.cid">
        <img :src="imgURL + c.img" alt="" />
      </swiper-slide>
      <!-- 页数指示点 -->
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- 左右箭头 -->
      <div
        class="swiper-button-prev swiper-button-white"
        slot="button-prev"
      ></div>
      <div
        class="swiper-button-next swiper-button-white"
        slot="button-next"
      ></div>
    </swiper>
    <!--/*楼梯1f*/-->
    <idex-floor title="首页推荐/1F" :items="data.recommendedItems"/>
    <!--楼梯2f-->
    <idex-floor title="最新上架/2F" :items="data.newArrivalItems"/>
    <!-- 3f -->
    <idex-floor title="热销单品/3F" :items="data.topSaleItems"/>
  </div>
</template>

<script>
import IdexFloor from '@/components/IdexFloor.vue';
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState(["imgURL"])
    },
  components: { IdexFloor },

  // 发请求获取首页的数据
  // 1.data负责存本地 2.methods写请求的方法 3.mounted触发请求
  data() {
    return {
      data: null,
    //   imgURL: "http://www.codeboy.com:9999/",
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // 循环滚动
        loop: true,
        //
        // effect:"cube",
        // 自动滚动
        autoplay: {
          delay: 800,
          // 用户操作swiper后,是否停止自动滚动
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    stopPlay() {
      console.log("stopPlay...");
      console.log(this.$refs);
      this.$refs.swiper.$swiper.autoplay.stop();
    },
    startPlay() {
      console.log("starPlay");
      this.$refs.swiper.$swiper.autoplay.start();
    },
    getData() {
      const url = "product/index.php";
      this.axios.get(url).then((res) => {
        this.data = res.data;
        console.log(res);
      });
    },
  },
  // 鼠标进入时,停止自动滚动
};
</script>

<style lang="scss" scoped>
// @import "../assets/css/item_cat.css";
</style>
<style scoped src="../assets/css/item_cat.css"></style>
<style lang="scss">
.swiper {
  margin: 10px auto;
  width: 1000px;
}
span.swiper-pagination-bullet {
  width: 16px;
  height: 16px;
}
</style>