<template>
  <div class="login-wrapper">
    <header class="login-title">
      <div class="login-bg">
        <div class="login-bg-top">
          <a href=""><span class="iconfont icon-jiantou"></span></a>
          <div class="login-bg-top-register">
            <router-link to="/register" class="right-register">注册</router-link>
            <router-view></router-view>
          </div>
        </div>
        <div class="login-bg-mid">
          <img src="./epet1.png" alt="">
        </div>
        <div class="login-bg-down">
          <ul class="login-user">
            <li class="login-user-left" @click="handelLogin(true)">
              <p >普通登录</p>
            </li>
            <li class="login-user-right" @click="handelLogin1(true)">
              <p >手机动态密码登录</p>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <div class="login-content">
      <div class="form-box">
        <div class="form-content" v-show="isShow">
          <ul class="login-form">
            <li class="username">
              <span class="iconfont icon-yonghu"></span>
              <input type="text" placeholder="手机号/邮箱/用户名" style="outline: none">
            </li>
            <li class="password">
              <span class="iconfont icon-mima"></span>
              <input type="text" placeholder="登录密码" style="outline: none">
            </li>
          </ul>
        </div>
        <div class="newform-content" v-show="isHiden">
          <ul class="newlogin-form">
            <li class="phonename">
              <span class="iconfont icon-shouji"></span>
              <input type="text" placeholder="已注册的手机号" style="outline: none"  v-model="phone">
            </li>
            <li class="content-p">
              <span class="iconfont icon-tupian"></span>
              <input type="text" placeholder="请输入验证码" class="yanzhengma_input"
                     @blur="checkLpicma" v-model="picLyanzhengma" style="outline: none">
              <input type="button" id="code" @click="createCode"
                      v-model="checkCode" style="outline: none" class="verification1"/>
              <!--<input type="text" placeholder="请输入图片的内容" style="outline: none">-->
              <span class="pctrue"></span>
            </li>
            <li class="newpassword">
              <span class="iconfont icon-duanxin"></span>
              <input type="text" placeholder="动态密码" style="outline: none" v-model="code">
              <p class="get-password" @click="sendCode">获取动态密码</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="ftc">
        <a href="">忘记密码?</a>
      </div>
      <div class="login-btn">
        <p @click="login">登录</p>
      </div>
      <div class="empty"></div>
      <div class="other-login">
        <div class="text">
          <p>合作网站登录</p>
          <ul class="text-p">
            <li><a href=""><img src="./zhifub.png" alt=""></a></li>
            <li><a href=""><img src="./qq.png" alt=""></a></li>
          </ul>
        </div>
      </div>
    </div>
    <br style="clear: both">
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data(){
      return{
        phone: '',
        code: '',
        status: '未登陆',
        isShow: true,
        isHiden: false,
        picLyanzhengma:'',
        checkCode:''
      }
    },
    methods: {
      // 图片验证码
      createCode(){
        let code = "";
        var codeLength = 4;//验证码的长度
        var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
          'S','T','U','V','W','X','Y','Z');//随机数
        for(var i = 0; i < codeLength; i++) {//循环操作
          var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）
          code += random[index];//根据索引取得随机数加到code上
        }
        this.checkCode = code;//把code值赋给验证码
      },
      // 失焦验证图和密码
      checkLpicma(){
        this.picLyanzhengma.toUpperCase();//取得输入的验证码并转化为大写
        if(this.picLyanzhengma == '') {
          alert('验证码不正确')
        }else if(this.picLyanzhengma.toUpperCase() != this.checkCode ) { //若输入的验证码与产生的验证码不一致时
          console.log( this.picLyanzhengma.toUpperCase())
          console.log(code)
          alert('验证码不正确')
          this.createCode();//刷新验证码
          this.picLyanzhengma = '';
        }else { //输入正确时
          return true;

        }

      },
      sendCode() {
        const url = `/sendcode?phone=${this.phone}`
        axios.get(url).then(response => {
          console.log('sendcode result ', response.data)
        })
      },
      login() {
        axios.post('/login', {phone: this.phone, code: this.code}).then(response => {
          console.log('login result ', response.data)
          const result = response.data
          if (result.code == 0) {
            const user = result.data
            this.status = `登陆成功: ${user.phone}`
            alert('登录成功')
            //重定向到首页
            this.$router.push({path:'/'})
          } else {
            this.status = `登陆失败, 请输入正确的手机号和验证码`
          }
        })
      },
      handelLogin(isShow){
        if(isShow){
          this.isShow = true
          this.isHiden = false
        }
      },
      handelLogin1(isShow){
        if(isShow){
          this.isShow = false
          this.isHiden = true
        }
      }
    },
    created(){
      this.createCode();
    },
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .login-wrapper
    width 100%
    .login-title
      width 100%
      height 180px
      .login-bg
        width 100%
        height 100%
        background-image url('bg.png')
        background-repeat no-repeat
        background-size 100% 100%
        opacity 0.9
        .login-bg-top
          display flex
          width 100%
          height 50px
          line-height 50px
          margin  0 10px 0
          &>a
            font-size 16px
            color #fff
            margin-right 82%
          .login-bg-top-register
            height 100%
            font-size 16px
            color #fff
            .right-register
              font-size 16px
              color #fff
        .login-bg-mid
          width 100%
          height 85px
          text-align center
          img
            width 20%
        .login-bg-down
          width 100%
          height 45px
          background-color rgba(255,255,255,0.3)
          .login-user
            display flex
            width 100%
            height 100%
            text-align center
            color #fff
            .login-user-left
              width 50%
              height 100%
              p
                width 100%
                height 20px
                display block
                color #fff
                margin-top 12px
            .login-user-right
              width 50%
              height 100%
              p
                width 100%
                height 20px
                display block
                color #fff
                margin-top 12px
    .login-content
      width 100%
      height 410px
      background #fff
      .form-box
        background #fff
        border-radius 0.5em
        margin 0 4% 1em 4%
        padding 0 1.6%
        .form-content
          width 333px
          height 92px
          .login-form
            width 100%
            height 100%
            .username
              box-sizing border-box
              width 100%
              height 50%
              padding-top 14px
              border-bottom #e2e2e2 solid 1px
              img
                width 17px
                height 21px
            .password
              box-sizing border-box
              width 100%
              height 50%
              padding-top 14px
              border-bottom #e2e2e2 solid 1px
              img
                width 17px
                height 21px
        .newform-content
          width 333px
          height 138px
          .newlogin-form
            width 100%
            height 100%
            .phonename
              box-sizing border-box
              width 100%
              height 33%
              padding-top 14px
              border-bottom #e2e2e2 solid 1px
              img
                width 17px
                height 21px
            .newpassword
              position relative
              box-sizing border-box
              width 100%
              height 33%
              padding-top 14px
              border-bottom #e2e2e2 solid 1px
              font-size 12px
              .get-password
                background #fff
                color #ff4259
                border 1px solid #eb4c33
                position absolute
                right 0
                top 6px
                border-radius 3px
                width 100px
                height 20px
                text-align center
                padding 4px 0
            .content-p
              position relative
              box-sizing border-box
              width 100%
              height 33%
              padding-top 14px
              border-bottom #e2e2e2 solid 1px
              .pctrue
                display block
                position absolute
                top 5px
                right 0
      .ftc
        width 100%
        height 20px
        box-sizing border-box
        padding 0 20px
        a
          float right
      .login-btn
        box-sizing border-box
        width 100%
        height 44px
        padding 0 20px
        p
          display block
          letter-spacing 5px
          margin 0 10%
          border-radius 5px
          background #2ec975
          font-size 15px
          padding .6em 0
          text-align center
          color #fff
      .empty
        width 100%
        height 120px
      .other-login
        width 100%
        height 113px
        .text
          color #d7d7d7
          margin-top 10px
          text-align center
          .text-p
            box-sizing border-box
            width 100%
            height 94px
            display flex
            padding 18px 0
            li
              width 33.3%
              padding 0 14.5px
              float left
              display inline

</style>
