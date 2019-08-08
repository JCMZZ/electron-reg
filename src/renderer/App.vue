<template>
  <div id="app">
    <el-container class="container">
      <el-aside width="auto" class="aside">
        <navigation></navigation>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import navigation from '@/components/navigation'
  export default {
    name: 'electron-reg',
    components: {
      navigation: navigation
    }
  }
</script>

<style scoped>
  #app {
    width: 100%;
    height: 100%;
  }
  .container{
    height: 100%;
  }
  .aside{
    background: #0b71ac;
  }
</style>
