<template>
  <div class="header drag">
    <div class="h_right no-drag">
      <strong v-if="nickname !== undefined">{{viewRole}}:</strong>
      <span v-if="nickname !== undefined">{{nickname}}</span>
      <div class="h_oper_box">
        <div class="h_btn"></div>
        <div class="h_oper">
          <el-tooltip class="item" effect="dark" content="Logout" placement="left">
            <div v-show="nickname !== undefined" class="h_btn_item" @click="logoutHandler"></div>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="Login" placement="left">
            <div v-show="nickname === undefined" class="h_btn_item" @click="loginHandler"></div>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="About Prep" placement="left">
            <div class="h_btn_item"></div>
          </el-tooltip>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import { setTimeout } from 'timers';
export default {
    name: 'reg-header',
    data() {
      return {

      };
    },
    computed: {
      ...mapGetters({
        viewRole: 'viewRole',
        nickname: 'nickname'
      })
    },
    methods: {
      ...mapActions(['USER_INFO', 'USER_ROLES', 'USER_NAVS']),
      logoutHandler() {
        localStorage.clear();
        this.USER_INFO({});
        this.USER_ROLES([]);
        this.USER_NAVS([]);
        // this.$api.logout({
        //   success: res => {
            this.loginHandler(); 
        //   }
        // });
      },
      loginHandler() {
        this.$electron.ipcRenderer.send('router-startup');
        this.$router.replace('/startup');
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
    height: 100%;
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
    transition: height .1s linear;
  }
  .h_btn_item{
    width: 36px;
    height: 30px;
    line-height: 30px;
    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3) {
      background-repeat: no-repeat;
    } 
    &:nth-child(1) {
      background-image: url("../assets/icons/h_logout.svg");
      background-size: 26px 26px;
      background-position: 5px;
    }
    &:nth-child(2) {
      background-image: url("../assets/icons/h_login.svg");
      background-size: 25px 25px;
      background-position: 5px;
    }
    &:nth-child(3) {
      background-image: url("../assets/icons/h_help.svg");
      background-size: 21px 21px;
      background-position: 7px;
    } 
  }
</style>
<style lang="scss">
  @import "../assets/css/theme.scss";
  [id^=el-tooltip-].is-dark .popper__arrow::after{
    border-left-color: $assist2-color;
  }
</style>