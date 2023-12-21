<template>
  <div v-loading="loading" element-loading-text="拼命下载中,请稍后...">
    <div class="main" v-if="isShow">
      <div
        :class="['contant', index >= 1 && 'content-other']"
        v-for="(item, index) in zfImg"
        :key="item.nickname"
      >
        <div
          class="top-img"
          :style="`background-image: url(${require(`./assets/img/bg/${index + 1 + currentIndex}.jpg`)});`"
        >
          <!-- <img src="./assets/img/bg/bg1.jpg" crossorigin="use-credentials" /> -->
          <div class="top-img-time">
            <div class="top-img-time-left">
              <img src="./assets/icons/xinhao.svg" />
              <div class="leftpngs">{{item.yys}}</div>
              <img class="leftpngs" src="./assets/icons/wifi.svg" />
            </div>
            <div class="top-img-time-mindel">{{item.randomTimes}}</div>
            <div class="top-img-time-right">
              <img class="pngs" src="./assets/icons/lock.svg" />
              <img class="pngs-nz" src="./assets/icons/naozhong.png" />
              <img class="dianchi" src="./assets/icons/dianchi.png" />
            </div>
          </div>

          <div class="reback">
            <p class="shuiyin">{{ shuiyin }}</p>
            <img src="./assets/icons/reback.svg" />
            <img src="./assets/icons/photo.svg" />
          </div>

          <div class="name">
            <p>{{ interNames[index + 1 + currentIndex] }}</p>
            <div class="top-toux">
              <img
                class="errorImg"
                :src="require(`./assets/img/currentprofiles/${index + 1 + currentIndex}.jpg`)"
                crossorigin="anonymous"
              />
            </div>
          </div>
        </div>

        <div
          v-for="(vals, valsIndex) in inputList"
          :key="valsIndex"
          class="zhuanfa"
          :style="valsIndex != 0 ? 'margin-top: 30px' : ''"
        >
          <div class="profiles">
            <img
              class="errorImg"
              :src="require(`./assets/img/currentprofiles/${index + 1 + currentIndex}.jpg`)"
              crossorigin="anonymous"
            />
          </div>

          <div class="zhuanfa-content">
            <p class="currentname">{{ interNames[index + 1 + currentIndex] }}</p>
            <div class="zhuanfa-png">
              <div
                class="zf-tp"
                :style="`background-image: url(${require(`./assets/zhuanfa/zf${valsIndex+1}.jpg`)});`"
              >
                <!-- <img src="./assets/zhuanfa/zf.jpg" alt /> -->
              </div>
              <div>
                <p class="title">{{ vals.title }}</p>
              </div>
            </div>
            <div class="footer">
              <div class="infos">
                <p>{{ valsIndex == 0 ? Math.floor(Math.random() * 6 + 1) : Math.floor(Math.random() * 16 + 6) }}分钟前</p>
                <p>钉钉</p>
                <img src="./assets/oparetion/icon_delete.png" />
              </div>
              <img class="oparetions" src="./assets/oparetion/oparetions1.png" />
            </div>
          </div>
        </div>

        <div class="friends">
          <div class="profiles">
            <img
              class="errorImg"
              :src="require(`./assets/img/profiles/${index + 1 + currentIndex}.jpg`)"
              @error="errorImg(index, 'other')"
              crossorigin="anonymous"
            />
          </div>
          <div class="friends-other">
            <p class="currentname">{{ interNames[index+1+500+currentIndex] }}</p>
            <!-- <div class="friends-other-img-div">
              <img class="friends-other-img" :src="backimg[Math.floor(Math.random() * (4 -1) + 1)]" />
            </div>-->
            <p class="frendsTxt">{{ textLangs[Math.floor(Math.random() * (1665 -1) + 1)] }}</p>

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
        <el-button type="text" @click="dialogVisible = true" :disabled="loading">点击上传</el-button>

        <el-button type="text" @click="downLoadImg" :disabled="loading">点击下载</el-button>

        <el-dialog
          title="文件个数"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose"
        >
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
        <div>
          <el-button type="text" @click="herfToLook" :disabled="loading">去看一看</el-button>
        </div>
        <div>
          <el-button type="text" @click="checkInit" :disabled="loading">请确认初始化</el-button>
        </div>
      </div>
    </div>
    <div class="looks" v-else>
      <div
        :class="['contant',index >= 1 && 'content-other', 'looks-div']"
        v-for="(item, index) in zfImg"
        :key="item.nickname"
      >
        <div class="top-img-time looks-tops">
          <div class="top-img-time-left">
            <img class="looks-xinhao" src="./assets/icons/xinhao-black.svg" />
            <div class="leftpngs-looks">{{item.yys}}</div>
            <img class="leftpngs looks-wifi" src="./assets/icons/wifi-black.svg" />
          </div>
          <div class="top-img-time-mindel-looks">{{item.randomTimes}}</div>
          <div class="top-img-time-right">
            <img class="pngs" src="./assets/icons/lock-black.svg" />
            <img class="pngs-nz-black" src="./assets/icons/naozhong-black.svg" />
            <img class="dianchi" src="./assets/icons/dianchi-black.svg" />
          </div>
        </div>

        <div class="reback">
          <p class="shuiyin">{{ shuiyin }}</p>
          <div class="reback-icon looks-reback-icons">
            <img src="./assets/icons/reback-looks.svg" />
          </div>
          <div class="mylook">我的在看</div>
        </div>

        <div class="myTx">
          <div class="left-div">
            <div class="myTx-img">
              <img :src="require(`./assets/img/currentprofiles/${index + 1 + currentIndex}.jpg`)" />
            </div>
            <p>{{ interNames[index+1+currentIndex] }}</p>
          </div>
          <div class="myTx-icons">
            <img src="./assets/oparetion/message.svg" />
            <img src="./assets/oparetion/setting.svg" />
          </div>
        </div>

        <div
          class="news"
          v-for="(vals, valsIndex) in inputList"
          :key="vals.nickname"
          :style="valsIndex != 0 ? 'margin-top: 30px' : ''"
        >
          <div class="news-top">
            <div class="news-infos">
              <p>{{ vals.title }}</p>
              <p class="auth">{{ vals.auth }}</p>
            </div>
            <div class="tp">
              <img :src="require(`./assets/zhuanfa/zf${valsIndex+1}.jpg`)" />
            </div>
          </div>

          <div class="news-bottom">
            <div class="times-ago">
              <p>{{ valsIndex == 0 ? Math.floor(Math.random() * 6 + 1) : Math.floor(Math.random() * 16 + 6) }}分钟前</p>
            </div>

            <div class="times-bottom">
              <div class="looking">
                <span>{{ Math.floor(Math.random() * 5 + 1)}}在看</span>
                <img src="./assets/oparetion/pull.jpg" />
              </div>
              <div class="right-tp">
                <img src="./assets/oparetion/lue.jpg" />
              </div>
            </div>
          </div>
        </div>

        <div class="desc">
          <div class="lines left"></div>
          <p class="text">超过48小时的在看对朋友不可见</p>
          <div class="lines right"></div>
        </div>

        <div class="news">
          <div class="news-top">
            <div class="news-infos">
              <p>{{ otherTitle }}</p>
              <p class="auth">{{ otherAuth }}</p>
            </div>
            <div class="tp">
              <img src="./assets/zhuanfa/zf3.jpg" />
            </div>
          </div>

          <div class="news-bottom">
            <div class="times-ago">
              <p>{{ historyTimes }}</p>
            </div>

            <div class="times-bottom">
              <div class="looking">
                <span>{{ Math.floor(Math.random() * 5 + 1)}}在看</span>
                <img src="./assets/oparetion/pull.jpg" />
              </div>
              <div class="right-tp">
                <img src="./assets/oparetion/lue.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <el-button type="text" @click="downLoadLooks" :disabled="loading">下载看一看</el-button>
        <el-button type="text" @click="herfToFrend" :disabled="loading">去朋友圈</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import html2canvas from "html2canvas";
import moment from "moment";
import langs from "./store/lang_test.js";
import tx from "./store/tx.js";
import backimg from "./store/backimg.js";
import currentTx from "./store/currentTx.js";
import interNames from "./store/names.js";

export default {
  data() {
    return {
      historyTimes: "12月13日",
      currentIndex: 0,
      inputList: [
        {
          title: "专家解读｜统一执法司法，完善醉驾治理体系",
          auth: "也评",
          otherTitle: "防范讲堂丨场外配资？不配！",
          otherAuth: "公安部经侦局",
          looksNum: Math.floor(Math.random() * 5 + 1)
        },
        {
          title: "专家解读｜规范证据收集、完善办理程序 提升醉驾案件办案质效",
          auth: "也评",
          otherTitle: "防范讲堂丨场外配资？不配！",
          otherAuth: "公安部经侦局",
          looksNum: Math.floor(Math.random() * 5 + 1)
        }
      ],
      yys: {
        1: "中国移动",
        2: "中国电信",
        3: "中国联通"
      },
      interNames,
      times: "11:30", //moment(new Date()).format("HH:mm"),
      names: "不知江月待何人",
      mins: 4,
      dialogVisible: false,
      num: 1,
      zfImg: [
        {
          yys: "中国移动",
          nickname: interNames[Math.floor(Math.random() * (500 - 1) + 1)],
          frendsTimes: 25,
          types: "分钟",
          otherName: interNames[Math.floor(Math.random() * (1000 - 501) + 501)],
          randomTimes: "11:30", //moment(new Date()).format("HH:mm"),
          txIndex: Math.floor(Math.random() * (500 - 1) + 1),
          othertxIndex: Math.floor(Math.random() * (500 - 1) + 1),
          dateTimes: moment(new Date().getTime() - 48 * 60 * 60 * 1000).format(
            "MM月DD日"
          ),
          looksNum: Math.floor(Math.random() * 5 + 1)
        }
      ],
      zfsrc: require("./assets/zhuanfa/zf1.jpg"),
      // otherName: generateIkeaLikeName(),
      textLangs: langs,
      frendsTimes: 25,
      types: "分钟",
      txObj: tx,
      backimg,
      currentTx,
      isShow: true,
      title: "刚刚：“哈佛、宾大校长辞职！麻省理工遭压力挺身护自由”",
      auth: "也评",
      otherTitle: "防范讲堂丨场外配资？不配！",
      otherAuth: "公安部经侦局",
      shuiyin: "028",
      loading: false
    };
  },
  computed: {
    randomTimes() {
      const currentTimes = new Date(); //moment(new Date()).format("LT")
      const times = currentTimes.getTime();
      const randomTimes =
        times - Math.floor(Math.random() * (2 * 60 * 60 * 1000 - 1000) + 1000);
      const timeStr = moment(new Date(randomTimes)).format("HH:mm");
      return timeStr;
    }
  },
  created(){
    const result = sessionStorage.getItem('currentIndex') || 0
    this.currentIndex = Number(result)
  },
  methods: {
    checkInit(){
      sessionStorage.setItem('currentIndex', 0)
      this.currentIndex = 0
      this.$message({
        type: 'success',
        message: '初始化成功，下载将从1开始。。'
      })
    },
    inputnums() {},
    errorImg(e, tag) {
      const ducomentClass = document.getElementsByClassName("errorImg");
      if (tag === "current") {
        ducomentClass[0].src = require(`./assets/img/bg/${e + 1}.webp`);
        ducomentClass[1].src = require(`./assets/img/bg/${e + 1}.webp`);
        ducomentClass[0].onerror = null;
        ducomentClass[1].onerror = null;
      } else {
        ducomentClass[2].src = require(`./assets/img/bg/${e + 1}.webp`);
        ducomentClass[2].onerror = null;
      }
      // e.srcElement.src = require(`./assets/img/bg/bg${ind}.png`);
    },
    herfToFrend() {
      this.isShow = true;
    },
    herfToLook() {
      this.isShow = false;
    },
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
      let yys = this.yys[Math.floor(Math.random() * 3 + 1)];
      this.dialogVisible = false;
      const currentTimes = new Date(); //moment(new Date()).format("LT")
      const times = currentTimes.getTime();
      const randomTimes =
        times - Math.floor(Math.random() * (2 * 60 * 60 * 1000 - 1000) + 1000);
      // 将上传完摁键转换数组
      const arr = [
        {
          yys,
          nickname: interNames[Math.floor(Math.random() * (500 - 1) + 1)],
          frendsTimes: 25,
          types: "分钟",
          otherName: interNames[Math.floor(Math.random() * (1000 - 501) + 501)],
          randomTimes: this.times,
          txIndex: Math.floor(Math.random() * (500 - 1) + 1),
          othertxIndex: Math.floor(Math.random() * (500 - 1) + 1),
          dateTimes: moment(new Date().getTime() - 48 * 60 * 60 * 1000).format(
            "MM月DD日"
          ),
          looksNum: Math.floor(Math.random() * 5 + 1)
        }
      ];
      for (let i = 2; i <= this.num; i++) {
        yys = this.yys[Math.floor(Math.random() * 3 + 1)];
        // 随机生成11-15 数字
        const randomHourNum = Math.floor(Math.random() * (15 - 11) + 11);
        // 随机生成0 - 60 数字
        let randomMinuteNum = Math.floor(Math.random() * (60 - 1) + 1);
        if (randomHourNum === 15) {
          randomMinuteNum = Math.floor(Math.random() * (30 - 1) + 1);
        }
        if (randomHourNum === 11) {
          randomMinuteNum = Math.floor(Math.random() * (60 - 30) + 30);
        }
        const timeStr = moment()
          .hour(randomHourNum)
          .minutes(randomMinuteNum)
          .format("HH:mm");
        const ikeaName = interNames[Math.floor(Math.random() * (500 - 1) + 1)];
        // 随机获取1-60以内数值
        const nums = Math.floor(Math.random() * (60 - 1) + 1);
        this.frendsTimes = nums;
        if (nums >= 1 && nums <= 5) {
          this.types = "天";
        }
        if (nums > 5 && nums <= 10) {
          this.types = "小时";
        }
        if (nums > 10 && nums <= 60) {
          this.types = "分钟";
        }
        // 随机获取头像index值
        const txIndex = Math.floor(Math.random() * (500 - 1) + 1);
        const othertxIndex = Math.floor(Math.random() * (500 - 1) + 1);
        // j获取随机时间 - 》 48小时
        const largeTime = Math.floor(
          Math.random() * (120 * 60 * 60 * 1000 - 1) + 48 * 60 * 60 * 1000
        );
        arr.push({
          yys,
          nickname: ikeaName,
          frendsTimes: nums,
          types: this.types,
          otherName: interNames[Math.floor(Math.random() * (1000 - 501) + 501)],
          randomTimes: timeStr,
          txIndex,
          othertxIndex,
          dateTimes: moment(
            new Date().getTime() - largeTime - 48 * 60 * 60 * 1000
          ).format("MM月DD日"),
          looksNum: Math.floor(Math.random() * 5 + 1)
        });
      }
      this.zfImg = arr;
      const strs = JSON.stringify(this.zfImg);
      // 存入本地，渲染看一看时，用当前数据，保证数据一致性
      localStorage.setItem("datas", strs);
      this.$message({
        type: "success",
        message: "上传成功"
      });

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

    downLoadLooks() {
      this.loading = true;
      this.$message({
        type: "success",
        message: "正在下载中，请勿操作页面，请稍后..."
      });
      const ducomentClass = document.getElementsByClassName("looks-div");

      const ducomentClassArray = Array.prototype.slice.call(ducomentClass);
      // 创建一个a标签 方便后续下载绘制好的图片
      const a = document.createElement("a");
      ducomentClassArray.forEach((items, index) => {
        html2canvas(items, { useCORS: true, allowTaint: true, scale: 1 }).then(
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

            if (index + 1 === this.num) {
              this.loading = false;
              sessionStorage.setItem('currentIndex', this.num == 1 ? 0 : this.num)
              const resultNum = Number(sessionStorage.getItem('currentIndex')) + this.currentIndex
              this.currentIndex = Number(resultNum)
              this.$message({
                type: "success",
                message: "已下载完成..."
              });
            }
          }
        );
      });
    },

    downLoadImg() {
      const index = sessionStorage.getItem('currentIndex')
      if(index>500){
        sessionStorage.setItem('currentIndex', 0)
        this.currentIndex = 0
      }
      this.loading = true;
      this.$message({
        type: "success",
        message: "正在下载中，请勿操作页面，请稍后..."
      });
      const ducomentClass = document.getElementsByClassName("contant");

      const ducomentClassArray = Array.prototype.slice.call(ducomentClass);
      // 创建一个a标签 方便后续下载绘制好的图片
      const a = document.createElement("a");
      ducomentClassArray.forEach((items, index) => {
        html2canvas(items, { useCORS: true, allowTaint: true, scale: 1 })
          .then(canvas => {
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


            if (index + 1 === this.num) {
              this.loading = false;
              this.$message({
                type: "success",
                message: "已下载完成..."
              });
            }
          })
          .catch(() => {
            console.log(12321231);
          });
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
  // height: 650px;
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
  padding-top: 4px;
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
  height: 80%;
}

.pngs-nz-black {
  height: 95%;
}
.dianchi {
  height: 100%;
}
.leftpngs {
  margin-left: 4px;
  font-size: 14px;
  font-weight: normal;
}
.leftpngs-looks {
  margin-left: 4px;
  font-size: 14px;
  font-weight: normal;
  color: #000;
}
.reback {
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  height: 25px;
  margin-top: 20px;
  padding: 0 12px;
  img {
    height: 100%;
  }
  .shuiyin {
    position: absolute;
    font-size: 40px;
    color: red;
    right: 45px;
    top: -15px;
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
  .top-toux {
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
    color: #5b6990;
    font-weight: 600;
  }
}
.footer {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}
.zhuanfa-png {
  margin-top: 6px;
  padding-top: 3px;
  padding-bottom: 3px;
  width: 100%;
  display: flex;
  align-items: center;
  background: #f7f7f7;
  .zf-tp {
    width: 35px;
    height: 30px;
    // background-image: url("./assets/zhuanfa/zf.jpg");
    background-size: 100% 100%;
  }
  .title {
    padding-left: 5px;
    font-size: 12px;
    font-weight: normal;
  }
  // img {
  //   width: 100%;
  //   height: 40px;
  // }
}
.infos {
  display: flex;
  width: 48%;
  align-items: center;
  p {
    color: #ccc;
    margin-right: 8px;
  }
  img {
    height: 18px;
  }
}
.oparetions {
  height: 18px;
  margin-top: 4px;
}
.footer-btn {
}

.friends {
  display: flex;
  width: 350px;
  margin-top: 30px;
  padding: 0 20px;
  white-space: normal;
  .profiles {
    width: 40px;
    height: 40px;
    img {
      width: 100%;
      height: 40px;
      border-radius: 6px;
    }
  }
  .friends-other {
    width: 300px;
    padding-left: 10px;
    color: #5b6990;
    .currentname {
      font-size: 16px;
      color: #5b6990;
      font-weight: 600;
    }
  }
  .frendsTxt {
    font-size: 14px;
    color: #000;
    font-weight: normal;
  }
  .friends-footer {
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
  .friends-other-img-div {
    width: 300px;
    height: 200px;
    overflow: hidden;
    margin-bottom: 10px;
    margin-top: 6px;
    .friends-other-img {
      width: 100%;
    }
  }
}

.looks {
  display: flex;
  .looks-div {
    background: #edeced;
    overflow: hidden;
  }
  .looks-xinhao {
    width: 20px;
    height: 20px;
  }
  .looks-wifi {
    width: 20px;
    height: 20px;
  }
}

.reback {
  padding-bottom: 10px;
}

.reback-icon {
  width: 25px;
  height: 25px;
}

.looks-reback-icons {
  width: 18px;
  img {
    width: 18px;
  }
}

.mylook {
  color: #000;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  right: 149px;
  margin-bottom: 5px;
}

.myTx {
  height: 110px;
  background: #fffeff;
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  font-weight: 500;
}
.myTx-img {
  width: 60px;
  height: 60px;
  display: flex;
  img {
    width: 60px;
    height: 60px;
    border-radius: 10px;
  }
}

.left-div {
  display: flex;
  align-items: center;
  p {
    padding-left: 20px;
  }
}

.myTx-icons {
  img {
    width: 26px;
    padding-left: 15px;
  }
}

.news {
  background: #fffeff;
  margin-top: 10px;
  padding: 20px 0;
}
.news-infos {
  width: 270px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .auth {
    color: #d3d3d3;
    font-size: 12px;
    font-weight: normal;
    padding-top: 10px;
  }
}
.news-top {
  display: flex;
  color: #000;
  padding-bottom: 20px;
  font-weight: 500;
  .tp {
    width: 60px;
    height: 60px;
    img {
      width: 60px;
      height: 60px;
      border-radius: 6px;
    }
  }
}

.news-bottom {
  border: 1px solid #d3d3d3;
  border-color: #d3d3d3 transparent transparent transparent;
  height: 75px;
  margin-left: 20px;
  span {
    color: #acacac;
    font-weight: normal;
    font-size: 14px;
  }
  .times-ago {
    color: #d3d3d3;
    padding-top: 20px;
    padding-bottom: 10px;
    font-weight: normal;
    font-size: 12px;
  }
  .times-bottom {
    display: flex;
    justify-content: space-between;
    .looking {
      display: flex;
      align-items: center;
      img {
        width: 18px;
        margin-left: 10px;
        position: relative;
        top: -1px;
      }
    }
    .right-tp {
      width: 30px;
      position: relative;
      top: 4px;
      right: 20px;
      img {
        width: 30px;
      }
    }
  }
}
.desc {
  color: #acacac;
  font-size: 14px;
  width: 390px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  .left {
    margin-right: 10px;
  }
  .right {
    margin-left: 10px;
  }
}

.lines {
  height: 2px;
  width: 35px;
  border: 1px solid #d3d3d3;
  border-color: #d3d3d3 transparent transparent transparent;
  position: relative;
  top: 2px;
}

.top-img-time-mindel-looks {
  height: 100%;
  width: 30%;
  display: flex;
  justify-content: center;
  color: #000;
}
</style>