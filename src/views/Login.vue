<template>
<!-- login.html -->
    <div>
    <!-- 页面顶部-->
    <header id="top">
      <div class="top">
        <router-link to="/">
        </router-link>
        <span>欢迎登录</span>
      </div>
    </header>
    <div id="container">
      <div id="cover" class="rt">
        <form id="form-login">
          <div class="txt">
            <p>
              登录学子商城
              <span>
                <a href="register.html">新用户注册</a>
              </span>
            </p>
            <div class="text">
              <input
                type="text"
                v-model="uname"
                placeholder="请输入您的用户名"
                name="uname"
                id="uname"
                required
                autofocus
              />
              <span
                ><img
              /></span>
            </div>
            <div class="text">
              <input
                type="password"
                id="upwd"
                v-model="upwd"
                placeholder="请输入您的密码"
                name="upwd"
                required
                minlength="6"
                maxlength="15"
              />
              <span
                ><img src="http://www.codeboy.com:9999/img/login/mm.png"
              /></span>
            </div>
            <div class="chose">
              <input
                type="checkbox"
                class="checkbox"
                id="ck_rmbUser"
                value="0"
              />自动登录
              <span>忘记密码？</span>
            </div>
            <input
              class="button_login"
              type="button"
              value="登录"
              id="bt-login"
              @click="login"
            />
          </div>
        </form>
      </div>
    </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                // 用于双向绑定到输入框
                uname: "",
                upwd:"",
            }
        },
        methods: {
            login() {
                const {uname,upwd}=this
                console.log(uname,upwd)
                const url="user/login.php"
                const params=`uname=${uname}&upwd=${upwd}`
                this.axios.post(url,params).then(res=>{
                    console.log(res)
                    // 需求：登录成功时立刻跳转到首页，并且头部内容发生变化
                    if(res.data.code==200){
                        // 跳转到首页
                        this.$router.push("/")
                        // 组件间的状态共享：当前的登录状态，让头部组件也知道登录
                        // Login.vue中的数据共享给MyHeader.vue
                        // 为什么写this.uname?防止上方不解构，可以直接写uname
                        this.$store.commit("updateUname",this.uname)
                    }else{
                        alert("登录失败："+res.data.msg)
                    }
                })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
<style scoped src="../assets/css/login.css"></style>