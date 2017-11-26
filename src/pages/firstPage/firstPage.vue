<template>
  <div class="firstPage-wrapper">
    <div id="indexbox" class="main">
      <headNav />
    </div>
    <firstMoudel />
    <secondMoudel />
    <threeMoudel />
    <fourMoudel />
  </div>
</template>

<script>
  import headNav from '../../components/headNav/headNav.vue'
  import firstMoudel from '../../components/firstMoudel/firstMoudel.vue'
  import secondMoudel from '../../components/secondMoudel/secondMoudel.vue'
  import threeMoudel from '../../components/threeMoudel/threeMoudel.vue'
  import fourMoudel from '../../components/fourMoudel/fourMoudel.vue'
  export default {
    components: {
      headNav,
      firstMoudel,
      secondMoudel,
      threeMoudel,
      fourMoudel
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
