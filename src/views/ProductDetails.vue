<template>
    <div>
        <!--  -->
            <!-- 内容-->
    <!--细节导航-->
    <div id="nav_detail">
      <h5>首页 > 学习用品 > 笔记本电脑 > <span id="fname"></span></h5>
    </div>
    <div class="loading" v-if="data==null">
      <img src="http://www.codeboy.com:9999/img/loading.gif" alt="加载中..." />
    </div>
    <div class="product_details" v-else>
      <!--产品预览-->
      <div id="shop_detail">
        <!-- 左侧-->
        <div id="preview" class="lf">
          <div id="mediumDiv">
            <img
              id="mImg"
              :src="imgURL+p.picList[img_cur].md"
            />
          </div>
          <div id="icon_all">
            <ul id="icon_list">
              <li class="i1" v-for="(pic,i) in p.picList.slice(0,5)" :key="pic.pid" @mouseover="img_cur=i"><img :src="imgURL+pic.sm"/></li>
              <!--<li class="i1"><img src="http://www.codeboy.com:9999/img/product_detail/product_detail_img3.jpg"/></li>-->
            </ul>
          </div>
        </div>
        <!-- 右侧-->
        <div class="right_detail lf">
          <!-- 商品名称-->
          <h1 class="title">{{p.title}}</h1>
          <!-- 商品全称-->
          <h3 class="subtitle">
            {{p.subtitle}}
          </h3>
          <!-- 价格部分-->
          <div class="price">
            <div id="pro_price"><b>学员售价：</b><span>￥{{p.price}}</span></div>
            <div class="promise">
              <b>{{p.promise}}:</b>
              <!--<span>*退货补运费</span>
          <span>*30天无忧退货</span>
          <span>*48小时快速退款</span>
          <span>*72小时发货</span>-->
            </div>
          </div>
          <!-- 参数部分 客服-->
          <p class="parameter">
            <b>客服：</b>
            <span class="connect">联系客服</span
            ><img
              class="gif"
              src="http://www.codeboy.com:9999/img/product_detail/kefuf.gif"
            />
          </p>
          <!-- 规格-->
          <div class="spec">
            <s>规格：</s>
            <div>
            <span class="avenge" :class="{borderChange:lid==s.lid}" @click="changeSpec(s.lid)" v-for="s in specs" :key="s.lid">{{s.spec}}</span>
          <!--  <span class="avenge">19寸 19 3T</span>-->
            </div>
          </div>
          <!-- 未选择规格，颜色时状态-->
          <div class="message"></div>
          <!-- 数量-->
          <p class="accountChose">
            <s>数量：</s>
            <button class="numberMinus">-</button>
            <input type="text" value="1" class="number" id="buy-num" />
            <button class="numberAdd">+</button>
          </p>
          <!-- 购买部分-->
          <div class="shops">
            <a href="cart.html" class="buy lf" id="buy_now">立即购买</a>
            <a href="#" class="shop lf" id="add_cart"
              ><img
                src="http://www.codeboy.com:9999/img/product_detail/product_detail_img7.png"
                alt=""
              />加入购物车</a
            >
            <a href="my_collect.html" class="collection lf" id="collect"
              ><span>收藏</span></a
            ><b
              ><img
                src="http://www.codeboy.com:9999/img/product_detail/product_detail_img6.png"
                alt=""
            /></b>
          </div>
        </div>
      </div>
      <!--为你推荐-->
      <div id="recommended">
        <p>为你推荐<span>大家都在看</span></p>
        <div id="demo" style="width: 1000px; overflow: hidden">
          <div id="indemo" style="float: left; width: 200%">
            <div id="demo1" style="float: left">
              <!-- 第一个宽度显示 -->
              <div class="detail_1 lf">
                <div class="detail_img1">
                  <img
                    src="http://www.codeboy.com:9999/img/product_detail/product_detail_1.png"
                    border="0"
                  />
                </div>
                <p>ThinkPad New S2 (20GUA00QCD)13.3英寸超霸</p>
              </div>
              <div class="detail_1 lf">
                <div class="detail_img1">
                  <img
                    src="http://www.codeboy.com:9999/img/product_detail/product_detail_2.png"
                    border="0"
                  />
                </div>
                <p>戴尔 DELL燃7000 R1605S 超霸</p>
              </div>
              <div class="detail_1 lf">
                <div class="detail_img1">
                  <img
                    src="http://www.codeboy.com:9999/img/product_detail/product_detail_3.png"
                    border="0"
                  />
                </div>
                <p>戴尔(DELL)魔方15MF Pro-R2505TSS灵</p>
              </div>
              <div class="detail_1 lf">
                <div class="detail_img1">
                  <img
                    src="http://www.codeboy.com:9999/img/product_detail/product_detail_4.png"
                    border="0"
                  />
                </div>
                <p>联想(Lenovo) YOGA900 (YOGA4 PRO)多彩版</p>
              </div>
              <!--</div>-->
            </div>
            <div id="demo2" style="float: left"></div>
          </div>
          <!-- 宽度超大 -->
        </div>
        <!-- 外面大框 -->
      </div>
      <!--商品详情-->
      <div id="iteminfo">
        <div id="tab">
          <div class="tab lf">
            <div class="cat">
              <span class="active"><a href="">商品详情</a></span>
              <span><a href="lookforward.html">商品评价</a></span>
            </div>
          </div>
          <div class="cart rt">
            <img
              src="http://www.codeboy.com:9999/img/product_detail/product_detail_img9.png"
              alt=""
            />
          </div>
        </div>
        <div class="left lf">
          <div class="all">
            <!--<p><img src="images_x/pin_logo.png" alt=""/></p>-->
            <div id="parm">
              <div id="specification_parameter">
                <p>
                  规格参数
                  <img
                    src="http://www.codeboy.com:9999/img/product_detail/product_detail_icon_1.png"
                    alt=""
                    class="ys5"
                  />
                </p>
              </div>
              <ul>
            <li><a href="#">商品名称:{{p.lname}}</a></li>
            <li><a href="#">系统:{{p.os}}</a></li>
            <li><a href="#">内存容量:{{p.memory}}</a></li>
            <li><a href="#">分辨率:{{p.resolution}}</a></li>
            <li><a href="#">显卡型号:{{p.video_card}}</a></li>
            <li><a href="#">处理器:{{p.cpu}}</a></li>
            <li><a href="#">显存容量:{{p.video_memory}}</a></li>
            <li><a href="#">分类:{{p.category}}</a></li>
            <li><a href="#">硬盘容量:{{p.disk}}</a></li>
              </ul>
            </div>
            <div id="product_introduction">
              <p>
                商品介绍
                <img
                  src="http://www.codeboy.com:9999/img/product_detail/product_detail_icon_4.png"
                  alt=""
                  class="ys5"
                />
              </p>
              <!-- <img src="http://www.codeboy.com:9999/img/product_detail/product_detail_img8.png" alt=""/> -->
                <div v-html="details"></div>
            </div>
            <div id="sale_protection">
              <p>
                售后保障
                <img
                  src="http://www.codeboy.com:9999/img/product_detail/product_detail_icon_3.png"
                  alt=""
                  class="ys5"
                />
              </p>

              <div class="sale_content">
                <p class="paper" id="sale_protect">
                  <img
                    src="http://www.codeboy.com:9999/img/product_detail/product_detail_img16.png"
                    alt=""
                  />
                  正品保障
                </p>

                <p class="content">
                  阿甲学子商城向您保证所售商品均为正品行货，阿甲自营商品开具机打发票或电子发票。
                </p>

                <p class="paper">
                  <img
                    src="http://www.codeboy.com:9999/img/product_detail/product_detail_img16.png"
                    alt=""
                  />
                  全国联保
                </p>

                <p class="content">
                  凭质保证书及阿甲商城发票，可享受全国联保服务，与您亲临商场选购的商品享受相同的质量保证。阿甲商城还为您提供具有竞争力的商品价格和运费政策，请您放心购买！
                  注：因厂家会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本司不能确保客户收到的货物与商城图片、产地、附件说明完全一致。只能确保为原厂正货！并且保证与当时市场上同样主流新品一致。若本商城没有及时更新，请大家谅解！
                </p>
              </div>
            </div>
            <div id="packing_list">
              <p>
                包装清单
                <img
                  src="http://www.codeboy.com:9999/img/product_detail/product_detail_icon_2.png"
                  alt=""
                  class="ys5"
                />
              </p>

              <p class="content">
                笔记本 x1 适配器 x1 电源线 x1 电池 x1 说明书（电子版）x1
                备注：笔记本电脑的背面只会标注此电脑的系列，例如： XPS 13-9360
                ，
                如果您需要核实此电脑的具体配置型号是否与阿甲页面相符，可电话咨询阿甲厂商：800-858-2969
              </p>
            </div>
          </div>
        </div>
        <div class="right rt">
          <div class="aside_nav">
            <p>
              <i
                ><img
                  src="http://www.codeboy.com:9999/img/product_detail/product_detail_icon_g_1.png"
                  alt="" /></i
              ><a href="#specification_parameter">规格参数</a>
            </p>
            <p>
              <i
                ><img
                  src="http://www.codeboy.com:9999/img/product_detail/product_detail_icon_t_1.png"
                  alt="" /></i
              ><a href="#product_introduction">商品介绍</a>
            </p>
            <p>
              <i
                ><img
                  src="http://www.codeboy.com:9999/img/product_detail/product_detail_icon_d_1.png"
                  alt="" /></i
              ><a href="#sale_protection">售后保障</a>
            </p>
            <p>
              <i
                ><img
                  src="http://www.codeboy.com:9999/img/product_detail/product_detail_icon_bao_1.png"
                  alt="" /></i
              ><a href="#sale_protect">包装清单</a>
            </p>
            <p>
              <i
                ><img
                  src="http://www.codeboy.com:9999/img/product_detail/product_detail_icon_up_1.png"
                  alt="" /></i
              ><a href="#">回到顶部</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
    export default {
        computed: {
            ...mapState(["imgURL"]),
            p() {
                return this.data.product 
            },
            specs(){
                return this.data.family.laptopList
            },
            details(){
                return this.p.details.replace(
                    /src="img/g,
                    'src="http://www.codeboy.com:9999/img'
                    )
            }
        },
        props:['lid'],
        // 请求的代码：data-methods-mounted
        data() {
            return {
                data: null,
                img_cur:0,//当前选中的小图的序号
            }
        },
        mounted () {
           this.getData() ;
        },
        methods: {
            changeSpec(lid){
                if(this.lid==lid)return
                this.$router.push("/product_details/"+lid)
                this.getData()
            },
            getData() {
                const url="product/details.php?lid="+this.lid
                this.axios.get(url).then(res=>{
                    this.data=res.data;
                    console.log(res)
                })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
<style scoped src="../assets/css/product_details.css"></style>