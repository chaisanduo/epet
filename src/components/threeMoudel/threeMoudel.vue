<template>
  <div class="surprise_day">
    <div class="surprise">
      <!--这是上半部分-->
      <div class="surprise-tit">
        <div class="fl-timing"><img src="./temai (1).png" alt=""></div>
        <p class="text">距离下一场</p>
        <div class="time">
          <div class="time1">
            <span class="time1-1">06</span>
            <span class="time1-2">:</span>
            <span class="time1-1">06</span>
            <span class="time1-2">:</span>
            <span class="time1-1">06</span>
          </div>
        </div>
        <div class="more">
          <a href="">
            <img src="./temai (2).png" alt="">
          </a>
        </div>
      </div>
      <!--这是下半部分-->
      <div class="surprise-pro">
        <div class="surprise-container" ref="swiperContainer">
          <ul class="surprise-wrapper">
            <li class="surprise-slide">
              <div class="pro-block">
                <a href="">
                  <div class="pro-img">
                    <img src="./temai (3).jpg" alt="">
                  </div>
                  <div class="pro-price">
                    <span class="price-1">￥</span>
                    <span class="price-2">1.50</span>
                  </div>
                  <p class="pro-text">省￥13.50</p>
                </a>
              </div>
            </li>
            <li class="surprise-slide">
              <div class="pro-block">
                <a href="">
                  <div class="pro-img">
                    <img src="./temai (4).jpg" alt="">
                  </div>
                  <div class="pro-price">
                    <span class="price-1">￥</span>
                    <span class="price-2">1.50</span>
                  </div>
                  <p class="pro-text">省￥13.50</p>
                </a>
              </div>
            </li>
            <li class="surprise-slide">
              <div class="pro-block">
                <a href="">
                  <div class="pro-img">
                    <img src="./temai (5).jpg" alt="">
                  </div>
                  <div class="pro-price">
                    <span class="price-1">￥</span>
                    <span class="price-2">1.50</span>
                  </div>
                  <p class="pro-text">省￥13.50</p>
                </a>
              </div>
            </li>
            <li class="surprise-slide">
              <div class="pro-block">
                <a href="">
                  <div class="pro-img">
                    <img src="./temai (6).png" alt="">
                  </div>
                  <div class="pro-price">
                    <span class="price-1">￥</span>
                    <span class="price-2">1.50</span>
                  </div>
                  <p class="pro-text">省￥13.50</p>
                </a>
              </div>
            </li>
            <li class="surprise-slide">
              <div class="pro-block">
                <a href="">
                  <div class="pro-img">
                    <img src="./temai (7).jpg" alt="">
                  </div>
                  <div class="pro-price">
                    <span class="price-1">￥</span>
                    <span class="price-2">1.50</span>
                  </div>
                  <p class="pro-text">省￥13.50</p>
                </a>
              </div>
            </li>
            <li class="surprise-slide">
              <div class="pro-block">
                <a href="">
                  <div class="pro-img">
                    <img src="./temai (8).jpg" alt="">
                  </div>
                  <div class="pro-price">
                    <span class="price-1">￥</span>
                    <span class="price-2">1.50</span>
                  </div>
                  <p class="pro-text">省￥13.50</p>
                </a>
              </div>
            </li>
            <li class="surprise-slide">
              <div class="pro-block">
                <a href="">
                  <div class="pro-img">
                    <img src="./temai (3).jpg" alt="">
                  </div>
                  <div class="pro-price">
                    <span class="price-1">￥</span>
                    <span class="price-2">1.50</span>
                  </div>
                  <p class="pro-text">省￥13.50</p>
                </a>
              </div>
            </li>
            <li class="surprise-slide">
              <div class="pro-block">
                <a href="">
                  <div class="pro-img">
                    <img src="./temai (3).jpg" alt="">
                  </div>
                  <div class="pro-price">
                    <span class="price-1">￥</span>
                    <span class="price-2">1.50</span>
                  </div>
                  <p class="pro-text">省￥13.50</p>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    mounted () {
      this.handleClick()
    },
    components: {},
    methods: {
      handleClick(){
        this.$nextTick(()=>{
          this.scroll = new BScroll(this.$refs.swiperContainer,{
            click: true,
            scrollX: true
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .surprise_day
    width 100%
    height 190px
    .surprise
      width 100%
      height 100%
      .surprise-tit
        display flex
        box-sizing border-box
        width 100%
        height 60px
        padding 10px 0
        position relative
        .fl-timing
          width 85px
          height 24px
          img
            width 100%
            height 100%
        .text
          height 20px
          font-size 14px
          margin-left 10px
          line-height 20px
        .time
          width 82px
          height 20px
          margin-left 5px
          line-height 20px
          .time1
            font-size 14px
        .more
          position absolute
          top 2px
          right 0px
          width 135px
          height 40px
          img
            float right
            top 0
            right 0
            width 50%
            height 100%
      .surprise-pro
        width 100%
        height 130px
        .surprise-container
          width 100%
          height 130px
          padding-left 5px
          .surprise-wrapper
            display flex
            width 200%
            height 130px
            padding-left 5px
            margin-right 10px
            .surprise-slide
              width 98px
              height 130px
              .pro-block
                width 100%
                height 130px
                margin 0 auto
                a
                  font-size 12px
                  text-align center
                  .pro-img
                    width 85px
                    height 85px
                    margin-bottom 3px
                    &>img
                      width 85px
                      height 85px
                  .pro-price
                    color red
                    margin-bottom 3px
</style>
