<template>
  <div class="currency_ad">
    <div class="currency-adcon">
      <div class="currency-title">
        <a href=""><img src="./temai (1).jpg" alt=""></a>
      </div>
      <div class="currency-pct">
        <div class="pctrue">
          <div class="left">
            <a href=""><img src="./temai (2).jpg" alt=""></a>
          </div>
          <div class="right">
            <a href="">
              <img src="./temai (3).png" alt="">
              <img src="./temai (4).jpg" alt="">
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .currency_ad
    width 100%
    height 230px
    background lemonchiffon
    .currency-adcon
      width 100%
      height 100%
      .currency-title
        width 100%
        height 40px
        img
          width 100%
          height 100%
      .currency-pct
        width 100%
        height 190px
        .pctrue
          display flex
          width 100%
          height 100%
          .left
            width 42%
            height 100%
            img
              display block
              width 100%
              height 100%
          .right
            width 58%
            height 100%
            img
              display block
              width 100%
              height 50%
</style>
