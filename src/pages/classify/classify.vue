<template>
  <div class="classify-wrapper">
    <!--这是头部-->
    <div class="classify-title">
      <div class="title">
        <div class="classify-title-left">
          <router-link to="/sortClass" >
            分类
          </router-link>
        </div>
        <div class="classify-title-right">
          <router-link to="/sortBrand" class="text">
            品牌
          </router-link>
        </div>
        <div class="classify-title-s"><img src="./search.png" alt=""></div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    mounted(){
      //发送请求获取calssify对象
      axios.get('/api1/classify')
        .then(response =>{
          const classify = response.data.data
          console.log('classify',classify)
        })
      //通过actions调用dispatch更新数据
      this.$store.dispatch('getClassify')
    },

    components: {

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .classify-wrapper
    width 100%
    hieght 100%
    .classify-title
      width 100%
      height 40px
      .title
        display flex
        box-sizing border-box
        padding 0 15px
        border-bottom 1px solid #cbcbcb
        position fixed
        left 0
        right 0
        top 0
        height 40px
        line-height 40px
        z-index 11
        background #fff
        .classify-title-left
          width 50%
          height 100%
          text-align right
          padding-right 5%
        .classify-title-right
          width 50%
          height 100%
          text-align left
          padding-left 5%
        .classify-title-s
          img
            position absolute
            top 13px
            right 15px
            width 14px
            height 14px
</style>
