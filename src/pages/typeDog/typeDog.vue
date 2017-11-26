<template>
  <div class="dog-wrapper">
    <div class="wap-top-bar hide">
      <!--这是头部-->
      <header class="head-top">
        <div class="title">
          <a href=""><span class="title-left iconfont icon-jiantou"></span></a>
          <div class="top-title">服饰城</div>
          <span class="title-right" @click="handelClick"></span>
        </div>
      </header>
    </div>
    <div class="content">
      <div class="swiperone"><img src="./1.jpg" alt=""></div>
      <div class="posttage">
        <ul class="posttage_up">
          <li class="posttage-p1">
            <a href=""><img src="./2.jpg" alt=""></a>
            <p class="text">外套</p>
          </li>
          <li class="posttage-p1">
            <a href=""><img src="./3.jpg" alt=""></a>
            <p class="text">卫衣</p>
          </li>
          <li class="posttage-p1">
            <a href=""><img src="./4.jpg" alt=""></a>
            <p class="text">四角装</p>
          </li>
          <li class="posttage-p1">
            <a href=""><img src="./5.jpg" alt=""></a>
            <p class="text">马甲</p>
          </li>
          <li class="posttage-p1">
            <a href=""><img src="./6.jpg" alt=""></a>
            <p class="text">家具服</p>
          </li>
          <li class="posttage-p1">
            <a href=""><img src="./7.jpg" alt=""></a>
            <p class="text">毛衣</p>
          </li>
          <li class="posttage-p1">
            <a href=""><img src="./8.jpg" alt=""></a>
            <p class="text">精美配饰</p>
          </li>
          <li class="posttage-p1">
            <a href=""><img src="./9.png" alt=""></a>
            <p class="text">更多</p>
          </li>
        </ul>
        <div class="posttage_down">
          <div class="posttage_down_img">
            <a href=""><img src="./10.jpg" alt=""></a>
          </div>
          <div class="posttage_down_img">
            <a href=""><img src="./11.jpg" alt=""></a>
          </div>
        </div>
      </div>
      <div class="fashion">
        <div class="title">
          <span class="title-p"><img src="./21.png" alt=""></span>
          <span class="title-text">时尚大牌</span>
          <span class="title-p"><img src="./21.png" alt=""></span>
        </div>
        <div class="cab">尖货品质 深度折扣</div>
        <div class="fashion-wrapper">
          <ul class="fashion-content">
            <li class="fashion_slide_content">
                  <div class="fashion_slide_content_p">
                    <img src="./22.jpg" alt="">
                  </div>
                  <div class="fashion_slide_content_text">始于2007年，坚持为本土爱犬打造时尚优质
                    的宠物服饰。凭借优秀的款式，优良的工，实惠的价格，成为超过150,000爱犬家庭的优先选择。
                  </div>
                </li>
            <li class="fashion_slide_content">
              <div class="fashion_slide_content_p">
                <img src="./23.jpg" alt="">
              </div>
              <div class="fashion_slide_content_text">Touchdog拥有强大设计团队，以设计风格时尚
                和潮流著称。强调美观及舒适性，把日式卡通及涂鸦融入产品，把宠物打造为一个时尚、潮流、可爱的宝贝。
              </div>
            </li>
            <li class="fashion_slide_content">
            <div class="fashion_slide_content_p">
              <img src="./24.jpg" alt="">
            </div>
            <div class="fashion_slide_content_text">一群专注于优质亲宠用品的设计者，从材质选择、
              款式设计，到制作工艺，生产品质，每一个环节都追求没有最好，只有更好。
            </div>
          </li>
            <li class="fashion_slide_content">
              <div class="fashion_slide_content_p">
                <img src="./22.jpg" alt="">
              </div>
              <div class="fashion_slide_content_text">始于2007年，坚持为本土爱犬打造时尚优质
                的宠物服饰。凭借优秀的款式，优良的工，实惠的价格，成为超过150,000爱犬家庭的优先选择。
              </div>
            </li>
            <li class="fashion_slide_content">
                <div class="fashion_slide_content_p">
                  <img src="./22.jpg" alt="">
                </div>
                <div class="fashion_slide_content_text">始于2007年，坚持为本土爱犬打造时尚优质
                  的宠物服饰。凭借优秀的款式，优良的工，实惠的价格，成为超过150,000爱犬家庭的优先选择。
                </div>
              </li>
          </ul>
          <div class="fashion-down">
            <span>1</span>
            <span>/</span>
            <span>3</span>
          </div>
        </div>
      </div>
    </div>
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
  .dog-wrapper
    width 100%
    .wap-top-bar
      width 100%
      height 50px
      background lightbluet
      .head-top
        height 100%
        padding 0 10px
        line-height 50px
        .title
          display flex
          justify-content space-between
          align-items center
          .title-left
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
    .content
      width 100%
      .swiperone
        width 100%
        height 160px
        img
          width 100%
          height 100%
      .posttage
        width 100%
        height 330px
        .posttage_up
          box-sizing border-box
          padding-top: 15px;
          width 100%
          height 230px
          padding-bottom 5px
          .posttage-p1
            float left
            box-sizing border-box
            width 25%
            height 50%
            padding 0 7px
            text-align center
            img
              width 70%
              border-radius 50% 50%
              margin-bottom 10px
            p
              font-size 12px
        .posttage_down
          width 100%
          height 100px
          display flex
          justify-content space-between
          .posttage_down_img
            box-sizing border-box
            width 50%
            height 100%
            padding 0 8px
            a
              img
                float left
                width 100%
                height 100%
      .fashion
        width 100%
        height 325px
        margin-top 1em
        .title
          display flex
          width 145px
          height 24px
          margin 0 auto
          font-size 14px
          line-height 24px
          .title-p
            display inline-block
            width 41px
            height 24px
        .cab
          width 100%
          height 20px
          font-size 12px
          text-align center
          line-height 20px
        .fashion-wrapper
          position relative
          width 94%
          height 260px
          margin 0 auto
          .fashion-content
            width 280px
            height 100%
            float left
            .fashion_slide_content
              width 270px
              height 100%
              padding 2%
              border 1px solid #e4e4e4
              box-shadow 5px 5px #f4f4f4
              .fashion_slide_content_p
                width 100%
                height 175px
                vertical-align middle
                img
                  width 100%
                  height 100%
              .fashion_slide_content_text
                margin 2% 0
                text-indent 26px
                height 60px
                display -webkit-box
                -webkit-line-clamp 3
                -webkit-box-orient vertical
                word-break break-all
                text-align left
          .fashion-down
            position absolute
            right 30px
            bottom 0

</style>
