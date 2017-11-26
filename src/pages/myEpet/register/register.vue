<template>
  <div class="register-wrapper">
    <div class="firstForm" v-show="isHiden">
      <ul class="register-first-form">
        <li class="form-li">
          <span class="iconfont icon-shouji"></span>
          <input type="text" placeholder="请输入手机号码"
                 style="outline: none" v-model="phoneNumber"
                 @change="changNextStep">
        </li>
      </ul>
      <div class="next-step">
        <p ref="next-step-text" :class="{nextStepClass:isA,nextStepText:isB}"
           @click="showForm(phoneNumber)">下一步</p>
      </div>
    </div>
    <transition name="showFormList">
      <registerFormList v-show="isShow" :phoneNumber="this.phoneNumber"/>
    </transition>

  </div>
</template>

<script>
  import registerFormList from '../../../components/registerFormList/registerFormList.vue'
  export default {
    data(){
      return{
        isHiden:true,
        isShow: false,
        isA:false,
        isB:true,
        phoneNumber: '',
        isClick: false
      }
    },
    methods:{
      changNextStep(val){
        if(!val) {
          console.log('111')
          return
        } else if (val.length !== 11) {
          console.log('222')
//          alert('您输入的电话有误')
          return
        } else {
          console.log('333')
          this.showForm(val)
        }
      },
      showForm(val){
        console.log('444')
        if(val && val.length === 11){
          this.isShow = true
          this.isHiden = false
        }
        this.phoneNumber = ''
      }
    },
    computed: {
      newPhoneNumber(val){
        this.phoneNumber = val
      }

    },
    watch: {
      phoneNumber: function(val){
        this.phoneNumber = val
        this.isB = false
        this.isA = true
      }
    },
    components: {
      registerFormList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .register-wrapper
    width 100%
    .firstForm
      width 100%
      height 125px
      .register-first-form
        width 100%
        height 50px
        .form-li
          position relative
          box-sizing border-box
          width 100%
          height 50px
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
  .showFormList-enter-active{
    animation:bounce-in 0.5s
  }
  .showFormList-leave-active{
    animation:bounce-in 0.5s
  }
  @keyframes bounce-in {
    0%{
      transform:translateY(300px)
      opacity 0.2
    }
    100%{
      transform:translateY(0px)
      opacity 0.8
    }
  }
</style>
