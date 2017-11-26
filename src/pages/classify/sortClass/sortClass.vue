<template>
  <div class="sortClass-wrapper" id="tab1">
    <div class="sortClass-nav">
      <ul class="sortClass-ul">
        <li class="sortClass-li" :class="{on:index===cateItem.currentIndex}" @click="clickMenuItem(index)"
            v-for="(item,index) in classify.sort" ref="itemList">{{item.name}}</li>
      </ul>
    </div>
    <div class="sortClass-content">
      <ul class="sortClass-box" v-if="classify.sort">
        <!--遍历的是cate_list数组-->
        <li class="sortClass-bg" v-for="(item1,index) in classify.sort[cateItem.currentIndex].cate_list"
            :key="index"  v-show="{showCateItem: index===cateItem.currentIndex}">
          <!--<p>{{item.title}}</p>-->
          <a href="" class="sortClass-title">
            {{item1.title}}
          </a>
          <ul class="sortClass-bg-ul">
            <!--遍历的是list数组-->
            <li class="sortClass-bg-li" v-for="(itemLi,index1) in item1.list" :key="index1">
              <a href="">
                <img :src="itemLi.photo||itemLi.logo" alt="" class="sortClass-bg-liImg">
                <p class="sortClass-bg-liText">{{itemLi.name}}</p>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

  import axios from 'axios'
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        itemLi: {},
        cateItem: {
          currentIndex: 0,
          showCateItem: true
        }
      }
    },
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
    methods: {
      //点击左侧的导航，右侧显示对应的列表，
      clickMenuItem(index){
        const {cateItem} = this
        //获取item数组
        const itemLists = this.$refs.itemList
        for(let i = 0;i<itemLists.length;i++) {
          if(i=== index){
            cateItem.currentIndex = i
//            this.isShow = true
          }
        }
        return cateItem
      }
    },
    computed: {
      ...mapState(['classify','classify.sort']),
    },
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .sortClass-wrapper
    position relative
    width 100%
    background #f3f4f5
    .sortClass-nav
      width 70px
      height 100%
      .sortClass-ul
        .sortClass-li
          box-sizing border-box
          text-align center
          padding: 15px 0;
          border-bottom: 1px solid #f3f4f5;
          width: 70px;
          height: 50px;
          font-size: 13px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          background #fff
        .on
          color #ed4044
          background #f3f4f5
    .sortClass-content
      position absolute
      top 0
      bottom 0
      margin-left 72px
      background #fff
      .sortClass-box
        box-sizing border-box
        .sortClass-bg
          padding 15px 5px 20px
          border-top 1px solid #f3f4f5
          font-size 12px
          color #999
          .sortClass-title
            width 100%
            height 20px
          .sortClass-bg-ul
            width 100%
            //height 100%
            overflow hidden
            .sortClass-bg-li
              float left
              height 50%
              width 33.3%
              margin-top 10px
              a
                width 100%
                .sortClass-bg-liImg
                    width 100%
                    height 100%
                .sortClass-bg-liText
                  height 20px
                  font-size: 12px
                  text-align center

</style>
