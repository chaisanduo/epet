<template>
  <div class="shopCart-wrapper">
    <div class="wap-top-bar hide">
      <!--这是头部-->
      <header class="head-top">
        <div class="title">
          <a href=""><span class="iconfont1 icon-jiantou"><</span></a>
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
    <div class="myCart">
      <div class="empty-cart">
        <div class="cart-p">
          <img src="./13.png" alt="">
        </div>
        <div class="text">购物车是空的</div>
        <div class="cart-button">
          <a href="" class="button-name">去逛逛</a>
          <a href="" class="button-name">我的收藏</a>
        </div>
      </div>
    </div>
    <br style="clear: both">
  </div>
</template>

<script>
  export default {
    data(){
      return{
        isShow: false
      }
    },
    methods:{
      handelClick(){
        this.isShow = !this.isShow
      }
    },
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .shopCart-wrapper
    width 100%
    background #f5f5f5
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
          .iconfont1
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
  .myCart
      width 100%
      background #fff
      .empty-cart
        width 100%
        height 300px
        font-size 14px
        color #dbdbdb
        text-align center
        .cart-p
          width 100%
          height 170px
          text-align center
          img
            width 100px
            height 100px
            margin 50px auto 20px;

        .text
          width 100%
          height 20px
        .cart-button
          width 100%
          height 40px
          margin-top 20px
          line-height 40px
          .button-name
            display inline-block
            width 100px
            height 40px
            border 1px solid #dbdbdb
            border-radius 5px 5px

</style>
