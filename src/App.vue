<template>
  <div class="main">
    <div
      :class="['contant', index >= 1 && 'content-other']"
      v-for="(item, index) in zfImg"
      :key="item.name"
    >
      <div
        class="top-img"
        :style="`background-image: url(${backimg[Math.floor(Math.random() * (4 -1) + 1)]});`"
      >
        <!-- <img src="./assets/img/bg/bg1.jpg" crossorigin="use-credentials" /> -->
        <div class="top-img-time">
          <div class="top-img-time-left">
            <img src="./assets/icons/xinhao.svg" />
            <div class="leftpngs">中国移动</div>
            <img class="leftpngs" src="./assets/icons/wifi.svg" />
          </div>
          <div class="top-img-time-mindel">{{item.randomTimes}}</div>
          <div class="top-img-time-right">
            <img class="pngs" src="./assets/icons/lock.png" />
            <img class="pngs-nz" src="./assets/icons/naozhong.png" />
            <img class="dianchi" src="./assets/icons/dianchi.png" />
          </div>
        </div>

        <div class="reback">
          <img src="./assets/icons/reback.svg" />
          <img src="./assets/icons/photo.svg" />
        </div>

        <div class="name">
          <p>{{ item.nickname }}</p>
          <div class="top-toux">
          <img :src="currentTx[index]" />
          </div>
        </div>
      </div>

      <div class="zhuanfa">
        <div class="profiles">
          <img :src="currentTx[index]" />
        </div>

        <div class="zhuanfa-content">
          <p class="currentname">{{ item.nickname }}</p>
          <div class="zhuanfa-png">
            <img :src="require(`./assets/zhuanfa/${item.name}`)" alt />
          </div>
          <div class="footer">
            <div class="infos">
              <p>{{ Math.floor(Math.random() * (10 -1) + 1) }}分钟前</p>
              <p>钉钉</p>
              <img src="./assets/oparetion/icon_delete.png" />
            </div>
            <img class="oparetions" src="./assets/oparetion/oparetions1.png" />
          </div>
        </div>
      </div>

      <div class="friends">
        <div class="profiles">
          <img :src="txObj[Math.floor(Math.random() * (5 -1) + 1)]" />
        </div>
        <div class="friends-other">
          <p class="currentname">{{ item.otherName }}</p>
          <div class="friends-other-img-div">
            <img class="friends-other-img" :src="backimg[Math.floor(Math.random() * (4 -1) + 1)]" />
          </div>
          <p class="frendsTxt">{{ textLangs[Math.floor(Math.random() * (170 -1) + 1)] }}</p>

          <div class="friends-footer">
            <div class="friends-infos">
              <p>{{ item.frendsTimes }}{{ item.types }}前</p>
            </div>
            <img class="oparetions" src="./assets/oparetion/oparetions1.png" />
          </div>
        </div>

      </div>
    </div>

    <div class="footer-btn">
      <el-button type="text" @click="dialogVisible = true">点击上传</el-button>

      <el-button type="text" @click="downLoadImg">点击下载</el-button>

      <el-dialog title="文件个数" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
        <el-input-number
          size="large"
          v-model="num"
          @change="handleChange"
          :min="1"
          label="请输入上传文件个数"
        ></el-input-number>
        <span slot="footer" class="dialog-footer">
          <el-button @click="cancel">取 消</el-button>
          <el-button type="primary" @click="comfirm">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import html2canvas from "html2canvas";
import moment from "moment";
import generateIkeaLikeName from "ikea-chinesename-generator";
import langs from './store/lang_test.js'
import tx from './store/tx.js'
import backimg from './store/backimg.js'
import currentTx from './store/currentTx.js'

export default {
  data() {
    return {
      times: moment(new Date()).format("LT"),
      names: "不知江月待何人",
      mins: 4,
      dialogVisible: false,
      num: 1,
      zfImg: [{ name: "zf1.png", nickname: "不知江月待何人", frendsTimes: 25, types: '分钟', otherName: generateIkeaLikeName(), randomTimes: moment(new Date()).format("LT")  }],
      zfsrc: require("./assets/zhuanfa/zf1.png"),
      // otherName: generateIkeaLikeName(),
      textLangs: langs,
      frendsTimes: 25,
      types: '分钟',
      txObj: tx,
      backimg,
      currentTx
    };
  },
  computed:{
    randomTimes(){
      const currentTimes = new Date() //moment(new Date()).format("LT")
    const times = currentTimes.getTime()
    const randomTimes = times - Math.floor(Math.random() * (2*60*60*1000 -1000) + 1000)
    const timeStr = moment(new Date(randomTimes)).format("LT")
    return timeStr
    },
  },
  methods: {
    genNickName() {
      // 获取指定范围内的随机数
      function randomAccess(min, max) {
        return Math.floor(Math.random() * (min - max) + max);
      }

      // 解码
      function decodeUnicode(str) {
        //Unicode显示方式是\u4e00
        str = "\\u" + str;
        str = str.replace(/\\/g, "%");
        //转换中文
        str = unescape(str);
        //将其他受影响的转换回原来
        str = str.replace(/%/g, "\\");
        return str;
      }

      function getRandomName(len) {
        let name = "";
        for (let i = 0; i < len; i++) {
          let unicodeNum = "";
          unicodeNum = randomAccess(0x4e00, 0x9fa5).toString(16);
          name += decodeUnicode(unicodeNum);
        }
        return name;
      }
      return getRandomName(Math.ceil(Math.random() * 6));
    },
    cancel() {
      this.dialogVisible = false;
      this.num = 1;
    },
    comfirm() {
      this.dialogVisible = false;
      const currentTimes = new Date() //moment(new Date()).format("LT")
    const times = currentTimes.getTime()
    const randomTimes = times - Math.floor(Math.random() * (2*60*60*1000 -1000) + 1000)
    const timeStr = moment(new Date(randomTimes)).format("LT")
      // 将上传完摁键转换数组
      const arr = [{ name: "zf1.png", nickname: "不知江月待何人", frendsTimes: 25, types: '分钟', otherName: generateIkeaLikeName(), randomTimes: this.times }];
      for (let i = 2; i <= this.num; i++) {
        const ikeaName = generateIkeaLikeName();
        // 随机获取1-60以内数值
      const nums = Math.floor(Math.random() * (60 - 1) + 1)
      this.frendsTimes = nums
      if(nums>=1 && nums <=5){
        this.types = '天'
      }
      if(nums>5 && nums <=10){
        this.types = '小时'
      }
      if(nums>10 && nums <=60){
        this.types = '分钟'
      }
        arr.push({ name: `zf${i}.png`, nickname: ikeaName, frendsTimes: nums, types: this.types, otherName: generateIkeaLikeName(), randomTimes: timeStr });
      }
      this.zfImg = arr;
    },
    handleChange(value) {
      this.num = value.toFixed();
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
          this.num = 1;
        })
        .catch(_ => {});
    },
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
        html2canvas(items, { useCORS: true, allowTaint: true, scale: 1, }).then(
          canvas => {
            // 追加一个canvas元素
            const dom = document.body.appendChild(canvas);
            // 隐藏我们新创建的元素
            dom.style.display = "none";
            a.style.display = "none";
            document.body.removeChild(dom);
            const blob = this.poop(dom.toDataURL("image/png"));

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
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

body {
  margin: 0 !important;
  padding: 0 !important;
}

.main {
  margin: 0;
  padding: 0;
  display: flex;
}

.contant {
  width: 390px;
  height: 820px;
}
.content-other {
  position: absolute;
  left: -2000px;
}
.top-img {
  width: 390px;
  height: 300px;
  position: relative;
  background-size: cover;
}
.top-img .top-img-time-left img {
  height: 100%;
}
.top-img-time {
  color: #fff;
  width: 100%;
  height: 20px;
  display: flex;
  position: relative;
  z-index: 2;
  justify-content: space-between;
}
.top-img-time-left {
  height: 100%;
  display: flex;
  align-items: center;
  width: 35%;
  padding-left: 5px;
}
.top-img-time-right {
  height: 100%;
  width: 35%;
  display: flex;
  justify-content: right;
  align-items: center;
  padding-right: 5px;
  img {
    margin-left: 4px;
  }
}
.top-img-time-mindel {
  height: 100%;
  width: 30%;
  display: flex;
  justify-content: center;
}
#contant-canvas {
  width: 390px;
  height: 2400px;
  position: absolute;
  top: 0;
}
.pngs {
  height: 80%;
}
.pngs-nz {
  height: 70%;
}
.dianchi {
  height: 100%;
}
.leftpngs {
  margin-left: 4px;
}
.reback {
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  height: 25px;
  margin-top: 14px;
  padding: 0 12px;
  img {
    height: 100%;
  }
}

.name {
  color: #fff;
  font-size: 22px;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  bottom: -20px;
  right: 0px;
  padding-right: 10px;
  p {
    position: relative;
    top: 20px;
    margin-right: 10px;
    font-weight: 600;
  }
  .top-toux{
    width: 80px;
    height: 80px;
    img {
    width: 80px;
    height: 80px;
    border-radius: 10px;
  }
  }
}

.zhuanfa {
  display: flex;
  width: 350px;
  margin-top: 60px;
  padding: 0 20px;
  .profiles {
    width: 40px;
    height: 40px;
    img {
      height: 40px;
      width: 40px;
      border-radius: 6px;
    }
  }
}
.zhuanfa-content {
  padding-left: 10px;
  width: 300px;
  .currentname {
    font-size: 16px;
    color: #485460;
    font-weight: 600;
  }
}
.footer {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}
.zhuanfa-png {
  padding-top: 6px;
  width: 280px;
  img {
    width: 100%;
    height: 40px;
  }
}
.infos {
  display: flex;
  width: 48%;
  align-items: center;
  p{
    color: #ccc;
    margin-right: 8px;
  }
  img {
    height: 14px;
  }
}
.oparetions {
  height: 18px;
  margin-top: 4px;
}
.footer-btn {
}

.friends{
  display: flex;
  width: 350px;
    margin-top: 30px;
    padding: 0 20px;
    white-space: normal;
  .profiles {
    img {
      height: 40px;
      border-radius: 6px;
    }
  }
  .friends-other{
    width: 300px;
    padding-left: 10px;
    color: #485460;
  }
  .frendsTxt{
    font-size: 14px;
    color: #000;
    font-weight: normal;
  }
  .friends-footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    color: #ccc;
    padding-top: 10px;
    .oparetions {
  height: 18px;
  margin-top: 4px;
}
  }
  .friends-other-img-div{
    width: 300px;
    height: 200px;
    overflow: hidden;
    margin-bottom: 10px;
    margin-top: 6px;
    .friends-other-img{
      width: 100%;
    }
  }
}

</style>