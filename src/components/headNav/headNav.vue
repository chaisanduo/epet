<template>
  <div class="main">
    <div class="main-header">
      <div class="head">
        <div class="head-left">
          <router-link to="/adressRouter">
            <div  class="left">
              <span>狗狗站</span>
              <span>|</span>
              <span>重庆</span>
            </div>
          </router-link>
          <router-view></router-view>
        </div>
        <p class="head-input">
          <input type="text" placeholder="搜索商品和品牌" disabled>
        </p>
        <div class="head-right">
          <img src="../../common/imgs/mydope.png" alt="">
        </div>
      </div>
    </div>
    <div class="navWrapper" ref="navWrapper" @clcik="handleClick">
      <ul class="nav-ul">
        <li class="nav-li">
          <router-link to="/">首页</router-link>
        </li>
        <li class="nav-li">
          <router-link to="/typeDog">服饰城</router-link>
        </li>
        <li class="nav-li">
          <router-link to="/typeDog">狗狗主粮</router-link>
        </li>
        <li class="nav-li">
          <router-link to="/typeDog">医疗保健</router-link>
        </li>
        <li class="nav-li">
          <router-link to="/typeDog">零食玩具</router-link>
        </li>
        <li class="nav-li">
          <router-link to="/typeDog">日用外出</router-link>
        </li>
        <li class="nav-li">
          <router-link to="/typeDog">美容香波</router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
//  import Vue from 'vue'
  import BScroll from 'better-scroll'
  export default {
    mounted () {
      this.handleClick()
    },
    components: {},
    methods: {
      handleClick(){
        this.$nextTick(()=>{
          this.scroll = new BScroll(this.$refs.navWrapper,{
            click: true,
            scrollX: true
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .main
    width 100%
    height 86px
    .main-header
      box-sizing border-box
      width 100%
      height 50px
      padding 5px 10px
      vertical-align middle
      background ghostwhite
      .head
        box-sizing border-box
        width 100%
        height 41px
        padding 10px 0
        font-size 14px
        vertical-align middle
        .head-left
          float left
          width 85px
          height 25px
          margin-right 10px
          .left
            width 85px
            height 25px
            line-height 25px
        .head-input
          float left
          width 220px
          height 25px
          font-size 14px
          margin-right 10px
          input
            width 100%
            height 100%
            border-radius 5px
        .head-right
          float left
          width 25px
          height 25px
          img
            width 100%
            height 100%
    .navWrapper
      width 100%
      height 36px
      .nav-ul
        display flex
        justify-content space-around
        width 140%
        heigh 100%
        .nav-li
          width 75px
          height 100%
          line-height: 36px;
          font-size: 14px;
          text-align: center;
          color: #666;
</style>
