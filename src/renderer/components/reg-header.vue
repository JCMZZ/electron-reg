<template>
  <div class="header">
    <div class="h_right">
      <strong>管理员:</strong>
      <span>Admin</span>
      <div class="h_oper_box">
        <div class="h_btn"></div>
        <div class="h_oper">
          <div class="h_btn_item" @click="logoutHandler"></div>
          <div class="h_btn_item"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: 'reg-header',
    data() {
      return {
      };
    },
    methods: {
      logoutHandler() {
        // this.$api.logout({
        //   success: res => {
            this.$electron.ipcRenderer.sendSync('router-startup');
        //   }
        // });
      }
    }
};
</script>
<style lang="scss" scoped>
  @import "../assets/css/theme.scss";
  .header{
    height: 54px;
    line-height: 54px;
    background: $assist2-color;
  }
  .h_right{
    float: right;
    display: flex;
    align-items: center;
    padding: 0 30px;
    color: $theme-color;
  }
  .h_right>strong {
    padding-right: 8px;
  }
  .h_oper_box {
    position: relative;
    width: 40px;
    height: 40px;
    margin-left: 20px;
    border-radius: 20px;
  }
  .h_btn{
    position: absolute;
    top: 0;
    height: 40px;
    width: 40px;
    line-height: 40px;
    border-radius: 20px;
    cursor: pointer;
    text-align: center;
    background: $theme-color;
    color: $assist2-color;
    z-index: 20000;
    background-image: url("../assets/icons/h_btn.svg");
    background-repeat: no-repeat;
    background-size: 28px 28px;
    background-position: 7px;
    transition: background-image .3s linear;
  }
  .h_btn:hover {
    background-image: url("../assets/icons/h_btn_active.svg");
  }
  .h_oper:hover,
  .h_btn:hover+.h_oper {
    height: 60px;
    padding-top: 35px;
  }
  .h_oper{
    cursor: pointer;
    position: relative;
    top: 3px;
    left: 2px;
    padding-top: 30px;
    width: 36px;
    height: 0;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 10000;
    background: $assist1-color;
    transition: height .3s linear;
  }
  .h_btn_item{
    width: 36px;
    height: 30px;
    line-height: 30px;
    &:nth-child(1),
    &:nth-child(2) {
      background-repeat: no-repeat;
    } 
    &:nth-child(1) {
      background-image: url("../assets/icons/h_logout.svg");
      background-size: 26px 26px;
      background-position: 5px;

    }
    &:nth-child(2) {
      background-image: url("../assets/icons/h_help.svg");
      background-size: 21px 21px;
      background-position: 7px;
    } 
  }
</style>
