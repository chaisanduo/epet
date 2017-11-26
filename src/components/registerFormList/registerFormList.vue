<template>
  <div>
    <div class="newForm">
      <ul class="register-form" ref="form-value">
        <li class="form-li">
          <span class="iconfont icon-shouji"></span>
          <input type="text" style="outline: none" ref="throwPhone">
        </li>
        <li class="form-li">
          <span class="iconfont icon-shouji"></span>
          <input type="text" placeholder="图片验证码"
                 style="outline: none" >
          <img src="https://wap.epet.com/share/seccode.html?hash=2313&height=30&width=85"
               alt="" class="register-p">
        </li>
        <li class="form-li">
          <span class="iconfont icon-shouji"></span>
          <input type="text" placeholder="验证码"
                 style="outline: none" >
          <a href="" class="get-password">获取短信验证码</a>
        </li>
        <li class="form-li">
          <span class="iconfont icon-shouji"></span>
          <input type="text" placeholder="你的昵称/用户名"
                 style="outline: none" >
        </li>
        <li class="form-li">
          <span class="iconfont icon-shouji"></span>
          <input type="text" placeholder="请设置密码"
                 style="outline: none" >
        </li>
        <li class="form-li">
          <span class="iconfont icon-shouji"></span>
          <input type="text" placeholder="请确认密码"
                 style="outline: none" >
        </li>
      </ul>
      <div class="next-step">
        <p ref="next-step-text" :class="{nextStepClass:isC,nextStepText:isD}"
           @click="showForm">下一步</p>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    props:{
      phoneNumber:String
    },
    data(){
      return{
        isC:false,
        isD: true

      }
    },
    mounted(){
      this.$refs.throwPhone.value = this.phoneNumber
    },
    methods:{
      changNextStep(val){
        if(val){
          this.isC = true
          this.isD = false
        }
      },
      showForm(){
        //this.isShow = true
//       this.isA = false
//       this.isB = true
      }
    },
    components: {

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .newForm
    width 100%
    .register-form
      width 100%
      height 300px
      .form-li
        position relative
        box-sizing border-box
        width 100%
        height 16.5%
        padding 14.5px 0 14.5px 30px
        border-bottom #e2e2e2 solid 1px
        font-size 14px
        .register-p
          position absolute
          top 8px
          right 10px
          width 85px
          height 30px
        .get-password
          box-sizing border-box
          background #fed171
          color #fff
          border 1px solid #e2e2e2
          position absolute
          right 10px
          top 10px
          border-radius 15px 15px
          width 130px
          height 30px
          text-align center
          padding 8px 0
    .next-step
      width 100%
      box-sizing border-box
      padding-top 18px
      line-height 50px
      margin-top 24px
      font-size 14px
      .nextStepText
        width 300px
        height 30px
        background #e2e2e2
        text-align center
        line-height 30px
        border-radius 10px 10px
        color #fff
        margin 0 auto
      .nextStepClass
        width 300px
        height 30px
        background #f03131
        text-align center
        line-height 30px
        border-radius 10px 10px
        color #fff
        margin 0 auto
</style>
