<template>
  <div class="navigation">
    <div class="logo" @click="isCollapse=!isCollapse">
      <img src="/static/img/test.png" alt="">
    </div>
    <el-menu
      @open="handleOpen"
      :collapse="isCollapse"
      @close="handleClose"
      class="el-menu-vertical-demo"
      background-color="#1F2A40"
      active-text-color="#DBC059"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
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
      handleOpen(key, keyPath) {
        console.log('key, keyPath',key, keyPath);
        // this.$electron.ipcRenderer.sendSync('router-startup');
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      }
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
