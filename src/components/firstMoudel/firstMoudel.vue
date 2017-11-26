<template>
  <div class="firstMoudel-wrapper">
    <!--<div class="firstMoudel-content">-->
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <a href="">
          <img src="./lunbo1.jpg" alt="">
        </a>
      </mt-swipe-item>
      <mt-swipe-item>
        <a href="">
          <img src="./lunbo2.jpg" alt="">
        </a>
      </mt-swipe-item>
      <mt-swipe-item>
        <a href="">
          <img src="./lunbo3.jpg" alt="">
        </a>
      </mt-swipe-item>
      <mt-swipe-item>
        <a href="">
          <img src="./lunbo4.jpg" alt="">
        </a>
      </mt-swipe-item>
      <mt-swipe-item>
        <a href="">
          <img src="./lunbo5.jpg" alt="">
        </a>
      </mt-swipe-item>
      <mt-swipe-item>
        <a href="">
          <img src="./lunbo6.png" alt="">
        </a>
      </mt-swipe-item>
      <mt-swipe-item>
        <a href="">
          <img src="./lunbo7.jpg" alt="">
        </a>
      </mt-swipe-item>
    </mt-swipe>
      <!--</div>-->
  </div>
</template>


<script>
  import Vue from 'vue'
  import { Swipe, SwipeItem } from 'mint-ui'
  Vue.component(Swipe.name, Swipe),
  Vue.component(SwipeItem.name, SwipeItem)
  export default {
    components: {

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .firstMoudel-wrapper
    width 100%
    height 160px
    img
      float left
      display block
      height 160px
</style>
