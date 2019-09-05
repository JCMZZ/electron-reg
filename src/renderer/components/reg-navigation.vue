<template>
  <div class="navigation">
    <div class="logo" @click="isCollapse=!isCollapse">
      <img src="/static/img/test.png" alt="">
    </div>
    <el-menu
      :popper-append-to-body="false"
      unique-opened
      default-active="/particulars" 
      router
      :collapse="isCollapse"
      class="el-menu-vertical-demo"
      background-color="#1F2A40"
      active-text-color="#DBC059"
    > 
      <el-menu-item index="/particulars">
        <i class="el-icon-menu"></i>
        <span slot="title" :class="{navActive: $route.path === '/particulars'}">首页</span>
      </el-menu-item>
      <template v-for="(nav, index) in navs">
          <el-submenu :index="nav.nav_code" :key="index">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">{{nav.nav_name}}</span>
            </template>
            <el-menu-item v-for="page in nav.pages" 
              :key="page.page_code" :index="page.page_router"
              >
              <i class="el-icon-location"></i>
              {{page.title}}
            </el-menu-item>
          </el-submenu>
      </template>
    </el-menu>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'reg-navigation',
    data() {
      return {
        isCollapse: true
      };
    },
    computed: {
      ...mapGetters({
        navs: 'navs'
      })
    }
};
</script>
<style lang="scss" scoped>
  @import "../assets/css/theme.scss";
  .logo{
    width: 64px;
    padding: 15px 0;
    cursor: pointer;
    margin: 0 auto;
  }
  .logo > img{
    width: 64px;
    height: 20px;
  }
  .el-menu{
    border: none;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
  }
  /deep/ .el-menu-item i,
  /deep/ .el-submenu__title i{
    color: $theme-color;
  }
  /deep/ .is-active i,
  .is-active .el-submenu__title>span {
    color: $assist1-color !important;
  }
  .navigation{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .navigation>ul:nth-child(2){
    flex-grow: 1;
  }
  .navActive{
    color: $assist1-color;
  }
</style>
<style lang="scss">
  @import "../assets/css/theme.scss";
  [id^=el-tooltip-].is-dark {
    background: $assist2-color;
    color: $theme-color;
  }
  [id^=el-tooltip-].is-dark .popper__arrow::after{
    border-right-color: $assist2-color;
  }
</style>
