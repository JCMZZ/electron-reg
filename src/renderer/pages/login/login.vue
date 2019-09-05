<template>
  <div class="login">
    <img src="/static/img/logow.png" class="login_logo drag" />
    <el-form
      label-position="top"
      @submit.native.prevent
      :rules="rules"
      ref="loginForm"
      label-width="80px"
      :model="loginData"
      class="login-form"
    >
      <el-form-item
        label="Account"
        :class="focusClass === 'email'?'focusClass':''"
        prop="email"
      >
        <el-input
          v-model="loginData.email"
          placeholder="Please enter your email"
          @focus="focusClass = 'email'"
          @blur="focusClass = ''"
        >
          <i slot="prefix" class="el-input__icon start_email"></i>
        </el-input>
      </el-form-item>
      <el-form-item label="Password" :class="focusClass === 'password'?'focusClass':''" prop="pwd">
        <el-input
          type="password"
          v-model="loginData.pwd"
          placeholder="Please enter your password"
          @focus="focusClass = 'password'"
          @blur="focusClass = ''"
        >
          <i slot="prefix" class="el-input__icon start_pwd"></i>
        </el-input>
      </el-form-item>
      <el-form-item size="large" style="float: right; margin: 0;">
        <reg-button content="Login" :event="onSubmit.bind(this)"></reg-button>
        <reg-button
          style="margin-left: 20px;"
          content="Back"
          @click.native="$router.push('/startup')"
        ></reg-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import regButton from "@/components/reg-button";
import { loginRule } from '@/assets/js/rules'
import Utils from '@/assets/js/utils'
export default {
  name: "reg-login",
  components: {
    regButton
  },
  data() {
    return {
      focusClass: "",
      loginData: {
        email: "",
        pwd: ""
      },
      rules: loginRule()
    };
  },
  methods: {
    ...mapActions(['USER_INFO', 'USER_ROLES', 'USER_NAVS']),
    onSubmit() {
      this.$refs["loginForm"]
        .validate((check, err)=>{
          if(check) {
            this.$api.login({
              params: { 
                email: this.loginData.email,
                pwd: this.$md5(this.loginData.pwd)
              },
              success: ({success, result}) => {
                if (success) {
                  let {roles, navs, user} = result;
                  localStorage.setItem('roles', JSON.stringify(roles));
                  localStorage.setItem('navs', JSON.stringify(navs));
                  localStorage.setItem('user', JSON.stringify(user));
                  this.USER_INFO(user);
                  this.USER_ROLES(roles);
                  this.USER_NAVS(navs);
                  this.$electron.ipcRenderer.send('router-index');
                  this.$router.replace('/');
                } else {
                  this.$elmsg.warning(res.message);
                }
              }
            });
          } else {
            this.$elmsg.warning(Utils.rulePassErr(err))
          }
        })
    }
  }
};
</script>
<style scoped lang="scss">
@import "../../assets/css/theme.scss";
.login_logo {
  position: fixed;
  left: 0;
  top: 10px;
}
.login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-image: url("/static/img/bg.png");
  background-repeat: no-repeat;
  background-size: 526px 416px;
}
.login-form {
  width: 70%;
  background: rgba(12, 12, 12, 0.1);
  padding: 20px;
}
/deep/ {
  &.el-form-item {
    margin-bottom: 30px;
  }
}
/deep/ .el-form-item__label {
  line-height: 20px;
  color: $assist1-color;
  padding: 0 0 5px;
}
/deep/ .el-input__inner {
  position: relative;
  z-index: 1000;
  border: none;
  background: $theme-color;
  color: $assist2-color;
  padding-left: 50px;
}
/deep/ .el-input__inner::-webkit-input-placeholder {
  color: $assist2-color;
  text-align: right;
}
/deep/ .el-input::after {
  content: "";
  width: 102%;
  height: 120%;
  border: 1px solid $assist1-color;
  border-radius: 4px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.5s ease-in-out;
  opacity: 0;
}
/deep/ .focusClass .el-input::after {
  opacity: 1;
}
/deep/ .el-form-item__error {
  top: 110%;
  font-size: 14px;
  padding-left: 80px;
}
/deep/ .el-input__icon {
  position: relative;
  color: $assist1-color;
  z-index: 1000;
}
.start_email {
  display: inline-block;
  background-image: url("../../assets/icons/startup_email.svg");
  background-repeat: no-repeat;
  background-size: 30px 30px;
  background-position: 5px 5px;
  width: 40px;
}
.start_pwd {
  display: inline-block;
  background-image: url("../../assets/icons/startup_pwd.svg");
  background-repeat: no-repeat;
  background-size: 30px 30px;
  background-position: 5px 5px;
  width: 40px;
}
</style>