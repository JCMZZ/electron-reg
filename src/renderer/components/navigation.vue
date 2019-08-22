<template>
  <div class="navigation">
    <!-- <img class="logo" src="" alt=""> -->
    <div class="logo" @click="isCollapse=!isCollapse">LOGO</div>
    <el-menu
      @open="handleOpen"
      :collapse="isCollapse"
      @close="handleClose"
      class="el-menu-vertical-demo"
      background-color="#0b71ac"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
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
    name: 'navigation',
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log('key, keyPath',key, keyPath);
        this.$electron.ipcRenderer.sendSync('router-startup');
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
};
</script>
<style lang="scss" scoped>
  .logo{
    width: 100%;
    height: 50px;
    cursor: pointer;
    line-height: 50px;
    text-align: center;
  }
  .el-menu{
    border: none;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
  }
</style>
