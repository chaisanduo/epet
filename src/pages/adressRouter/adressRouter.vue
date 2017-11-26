<template>
  <div class="adress-wrapper">
    <div class="wap-top-bar hide">
      <!--这是头部-->
      <header class="head-top">
        <div class="title">
          <a href=""><span class="iconfont icon-jiantou"></span></a>
          <div class="top-title">购物车</div>
          <span class="title-right" @click="handelClick"></span>
        </div>
      </header>
    </div>
    <div class="shopCart-router" v-show="isShow">
      <div class="routerContent">
        <div class="footernav-cart ">
          <div class="footerRouter">
            <!--首页路由-->
            <div class="routerP">
              <div class="icon-home1">
                <router-link to="/firstPage" class="icon">
                  <span class="iconfont icon-home"></span>
                  首页
                </router-link>
              </div>
            </div>
            <!--分类路由-->
            <div class="routerP">
              <div class="icon-home1">
                <router-link to="/classify" class="icon icon-search">
                  <span class="iconfont icon-sousuo1"></span>
                  分类
                </router-link>
              </div>
            </div>
            <!--购物车路由-->
            <div class="routerP">
              <div class="icon-home1">
                <router-link to="/shopCart" class="icon icon-cart">
                  <span class="iconfont icon-gouwuche1"></span>
                  购物车
                </router-link>
              </div>
            </div>
            <!--我的E宠路由-->
            <div class="routerP">
              <div class="icon-home1">
                <router-link to="/myEpet" class="icon icon-confused">
                  <span class="iconfont icon-xiaolian"></span>
                  我的E宠
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <router-view></router-view>
      </div>
    </div>
    <div class="myAddressBox">
      <div class="myAddressBox-wra">
        <div class="dog-title">
          <a href=""><span class="cat">猫猫站</span></a>
          <a href=""><span class="dog">狗狗站</span></a>
          <a href=""><span class="">水族站</span></a>
        </div>
        <div class="addressbox">
          <div class="this-pagetop">
            <div class="content-head">
              <span class="content-head-left">当前默认地址：</span>
              <span class="content-head-right">重庆 渝中区</span>
            </div>
            <v-distpicker type="mobile" province="重庆" city="渝中区"></v-distpicker>
          </div>
        </div>
      </div>
    </div>
    <br style="clear: both">
  </div>
</template>

<script>
  import VDistpicker from 'v-distpicker'
  export default {
    data(){
      return{
        isShow: false,
        "province": "重庆",
        "city": "渝中区",
//        "area": "海珠区"
      }
    },
    methods:{
      handelClick(){
        this.isShow = !this.isShow
      }
    },
    components: {
      VDistpicker
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .adress-wrapper
    width 100%
    .wap-top-bar
      width 100%
      height 50px
      background lightbluet
      border-bottom solid 1px #e2e2e2
      background #fff
      .head-top
        height 100%
        padding 0 10px
        line-height 50px
        .title
          display flex
          justify-content space-between
          align-items center
          .iconfont
            display inline-block
            width 11px
            height 18px
            font-size 14px
          .top-title
            display inline-block
          .title-right
            display inline-block
            width 17px
            height 18px
            background-image url('../../common/imgs/5.png')
            background-repeat no-repeat
            background-size 17px 18px
  .shopCart-router
    width 100%
    height 75px
    .routerContent
      width 100%
      height 100%
      position relative
      .footernav-cart
        width 100%
        height 100%
        .footerRouter
          width 100%
          height 100%
          display flex
          justify-content space-around
          align-items center
          font-size 12px
          background white
          .routerP
            width 25%
            height 100%
            vertical-align middle
            .icon-home1
              width 42px
              height 40px
              margin 0 auto
              margin-top 15px
              .icon
                width 100%
                height 100%
                .iconfont
                  display block
                  width 50%
                  height 50%
  .myAddressBox
    width 100%
    .myAddressBox-wra
      width 100%
      .dog-title
        display flex
        box-sizing border-box
        width 100%
        height 54px
        padding 10px
        background #f5f5f5
        a
          width 33%
          heighgt 34px
          display block
          text-align center
          line-height 34px
          border-radius 5px
          font-size 15px
          background #b9b9b9
          color: #666
          margin 0 5px
      .addressbox
        width 100%
        .this-pagetop
          position relative
          width 100%
          .address-header
            background #ffe6d9
          .content-head
            position absolute
            top 0
            left 0
            width 100%
            height 43px
            background #ffe6d9
            line-height 43px
</style>
