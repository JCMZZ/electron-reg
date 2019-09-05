<template>
  <div id="app">
    <el-container class="container">
      <el-aside width="auto" class="aside" v-show="!$route.meta.start">
        <reg-navigation></reg-navigation>
      </el-aside>
      <el-main style="padding: 0;">
        <div class="main_layout">
          <el-header v-show="!$route.meta.start">
            <reg-header></reg-header>
          </el-header>
          <div>
            <router-view></router-view>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import regNavigation from '@/components/reg-navigation'
  import regHeader from '@/components/reg-header'
  export default {
    name: 'electron-reg',
    components: {
      regNavigation,
      regHeader
    },
    mounted(){
      // console.log(this.$route)
      document.onselectstart = () => false;
    },
  }
</script>

<style scoped lang="scss">
 @import "./assets/css/theme.scss";
  #app {
    width: 100%;
    height: 100%;
  }
  .container{
    height: 100%;
  }
  .main_layout{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .main_layout>div:nth-child(2) {
    height: 100%;
    flex-grow: 1;
  }
  /deep/ .el-header{
    height: 54px !important;
    padding: 0;
  }
</style>
