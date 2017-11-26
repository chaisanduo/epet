<template>
  <div id="wrapper">
    <!--这是可隐藏的头部-->
    <div class="overflow xiazaiApp"style="display: none">
      <div class="overflow rela">
        <span class="closebtn icon-close">
          <img src="./common/imgs/close3.png" alt="">
        </span>
        <div class="appdowing">
          <a href="">
            <img src="./common/imgs/one1.png" alt="">
          </a>
        </div>
      </div>
    </div>
    <!--这个是最下面的4个路由组件-->
    <div class="routerContent">
      <router-view></router-view>
      <div class="footernav bottom_menu_bar bgfff">
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
          <div class="routerP" >
            <div class="icon-home1">
              <router-link to="/shopCart" class="icon icon-cart">
                <span class="iconfont icon-gouwuche1"></span>
                购物车
              </router-link>
            </div>
          </div>
          <!--我的E宠路由-->
          <div class="routerP" >
            <div class="icon-home1">
              <router-link to="/myEpet" class="icon icon-confused">
                <span class="iconfont icon-xiaolian"></span>
                我的E宠
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import headNav from './components/headNav/headNav.vue'
  export default {
    mounted(){
      this.$http.get('/api1/firstPage')
        .then(response =>{
          const result = response.data.data
          console.log('this.$http.get',result)
        })
      axios.get('/api1/firstPage')
        .then(response => {
          const result = response.data.data
          console.log('axios.get',result)
        })
      this.$store.dispatch('getFirstPage')
    },
    components: {
      headNav
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  /*@import "../../common/stylus/mixin.styl"*/

  #wrapper
    .xiazaiApp
      z-index: 120
      position:relative
      .closebtn
        display: inline-block
        width: 5%
        height 5%
        margin-right: 2%
        vertical-align: middle
        position:absolute
        top: 30%
        left:2%
        img
          width: 100%
          height:100%
      .appdowing
        width:100%
        height: 56px
        img
          width:100%
          height:100%
    .routerContent
      .footernav
        width 100%
        height 45px
        position fixed
        left 0
        bottom 0
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
            .icon-home1
              width 42px
              height 40px
              margin 0 auto
              .icon
                width 100%
                height 100%
                text-align center
                .iconfont
                  display block
                  width 50%
                  height 50%
</style>
