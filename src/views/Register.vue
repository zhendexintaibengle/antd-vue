<template>
    <div>
            <!-- 页面顶部-->
    <header id="top">
      <div class="top">
        <router-link to="/">
          <img src="http://www.codeboy.com:9999/img/header/logo.png" alt="" />
        </router-link>
        <span>欢迎注册</span>
      </div>
    </header>
    <div class="parent">
      <div class="container">
        <div class="panel rt">
          <form id="form-register">
            <div class="txt">
              <p>
                新用户注册
                <span>
                  <a href="login.html">直接登录</a>
                </span>
              </p>
            </div>
            <div class="form-group">
              <label for="uname">用户名：</label>
              <input
                v-model="uname"
                autocomplete
                required
                minlength="3"
                maxlength="12"
                type="text"
                placeholder="请输入用户名"
                autofocus
                name="uname"
                id="uname"
              />
              <span class="msg-default">用户名长度在3到12位之间</span>
            </div>
            <div class="form-group">
              <label for="upwd">登录密码：</label>
              <input
              v-model="upwd"
                required
                type="password"
                minlength="6"
                maxlength="12"
                placeholder="请输入密码"
                name="upwd"
                autofocus
                id="upwd"
              />
              <span class="msg-default hidden">密码长度在6到12位之间</span>
            </div>
            <div class="form-group">
              <label for="upwdconfirm">确认密码：</label>
              <input
              v-model="re_upwd"
                required
                type="password"
                minlength="6"
                maxlength="12"
                placeholder="请确认密码"
                name="upwdconfirm"
                autofocus
                id="upwdconfirm"
              />
              <span class="msg-default hidden">密码长度在6到12位之间</span>
            </div>
            <div class="form-group">
              <label for="email">邮箱：</label>
              <input
              v-model="email"
                autocomplete
                required
                type="email"
                placeholder="请输入邮箱地址"
                name="email"
                id="email"
              />
              <span class="msg-default hidden">请输入合法的邮箱地址</span>
            </div>
            <div class="form-group">
              <label for="phone">手机号：</label>
              <input
              v-model="phone"
                id="phone"
                name="phone"
                placeholder="请输入您的手机号"
                pattern="(\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$"
                required
                type="text"
              />
              <span class="msg-default hidden">请输入合法的手机号</span>
            </div>
            <div class="form-group">
              <label></label>
              <input @click="doReg" type="button" value="提交注册信息" id="bt-register" />
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
    export default {
        methods:{
            doReg(){
                const {uname,upwd,re_upwd,email,phone}=this
                console.log(uname,upwd,re_upwd,email,phone)
                const url="user/register.php"
                const params=`uname=${uname}&upwd=${upwd}&email=${email}&phone=${phone}`
                this.axios.post(url,params).then(res=>{
                    console.log(res)
                    if(res.data.code==200){
                        alert("成功")
                    }else{
                        alert("失败")
                    }
                })
            }
        },
        data() {
            return {
                uname:"",
                upwd:"",
                re_upwd:"",
                email:"",
                phone:"",
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
<style  scoped src="../assets/css/login.css"></style>