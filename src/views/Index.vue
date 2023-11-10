<template>
  <div class="main">
    <div class="content">
      <!-- index.html -->
      <!-- banner部分-->
    </div>

    <button @click="downLoadImg">下载</button>
  </div>
</template>

<script>
import IdexFloor from "@/components/IdexFloor.vue";
import { mapState } from "vuex";
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
          clickable: true
        },
        // 循环滚动
        loop: true,
        //
        // effect:"cube",
        // 自动滚动
        autoplay: {
          delay: 800,
          // 用户操作swiper后,是否停止自动滚动
          disableOnInteraction: false
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    poop(dataurl) {
      var arr = dataurl.split(","); //分割为数组，分割到第一个逗号
      let mime = arr[0].match(/:(.*?);/)[1]; //获取分割后的base64前缀中的类型
      let bstr = window.atob(arr[1]);
      let n = bstr.length;
      let u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], { type: mime });
    },

    downLoadImg() {
      const ducomentClass = document.getElementsByClassName("contant");

      const ducomentClassArray = Array.prototype.slice.call(ducomentClass);
      // 创建一个a标签 方便后续下载绘制好的图片
      const a = document.createElement("a");
      ducomentClassArray.forEach(items => {
        html2canvas(items, { useCORS: true, allowTaint: false }).then(
          canvas => {
            // 追加一个canvas元素
            const dom = document.body.appendChild(canvas);
            // 隐藏我们新创建的元素
            dom.style.display = "none";
            a.style.display = "none";
            document.body.removeChild(dom);
            const blob = poop(dom.toDataURL("image/png"));

            // 给新建的a标签添加 href属性
            a.setAttribute("href", window.URL.createObjectURL(blob));
            // 这块是保存图片操作  可以设置保存的图片的信息 download 是a标签下载的方法
            a.setAttribute("download", "图片" + ".png");
            document.body.appendChild(a);
            a.click();
            URL.revokeObjectURL(blob);
            document.body.removeChild(a);
          }
        );
      });
    },
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
      this.axios.get(url).then(res => {
        this.data = res.data;
        console.log(res);
      });
    }
  }
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