<template>
  <div class="bg drag">
    <div class="start_main">
      <reg-button class="no-drag" content="Tourist" :event="lookHandler"></reg-button>
      <reg-button class="no-drag" content="Login" @click.native="$router.push('/login')"></reg-button>
      <reg-button class="no-drag" content="Register" @click.native="$router.push('/register')"></reg-button>
    </div>
  </div>
</template>

<script>
  import regButton from '../../components/reg-button'
  export default {
    name: 'startup',
    components: {
      regButton
    },
    methods: {
      lookHandler() {
        this.$electron.ipcRenderer.send('router-index');
        this.$router.push('/');
      }
    }
  }
</script>

<style scoped>
  .start_main{
    box-sizing: border-box;
    padding-bottom: 5px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    transition: background .5s ease-out;
    background: transparent;
  }
  .start_main:hover{
    background: rgba(88, 88, 88, 0.226);
  }
  .bg{
    width: 100%;
    height: 100%;
    background-image: url('/static/img/start.jpg');
    background-repeat:no-repeat;
    background-size: 526px 416px;
  }
</style>
