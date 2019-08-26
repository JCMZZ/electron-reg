<template>
  <div class="navigation">
    <div class="logo" @click="isCollapse=!isCollapse">
      <img src="/static/img/test.png" alt="">
    </div>
    <el-menu
      :popper-append-to-body="false"
      unique-opened
      router
      :collapse="isCollapse"
      class="el-menu-vertical-demo"
      background-color="#1F2A40"
      active-text-color="#DBC059"
    >
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">RegExp</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
    name: 'reg-navigation',
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
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
