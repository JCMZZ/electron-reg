<template>
    <div class="login">
        <img src="/static/img/logow.png" class="login_logo">
        <el-form label-position="top" @submit.native.prevent
            :rules="rules" ref="loginForm" label-width="80px" :model="loginData" class="login-form">
            <el-form-item label="Account" 
                :class="focusClass === 'account'?'focusClass':''"
                prop="account">
                <el-input v-model="loginData.account" 
                    placeholder="Please enter your account number"
                    @focus="focusClass = 'account'"
                    @blur="focusClass = ''"></el-input>
            </el-form-item>
            <el-form-item label="Password" 
                :class="focusClass === 'password'?'focusClass':''"
                prop="pwd">
                <el-input type="password" v-model="loginData.pwd" 
                    placeholder="Please enter your password"
                    @focus="focusClass = 'password'"
                    @blur="focusClass = ''"></el-input>
            </el-form-item>
            <el-form-item label="Verify Password" 
                :class="focusClass === 'pwdAgain'?'focusClass':''"
                prop="pwdAgain">
                <el-input type="password" v-model="loginData.pwdAgain" 
                    placeholder="Please enter your password again"
                    @focus="focusClass = 'pwdAgain'"
                    @blur="focusClass = ''"></el-input>
            </el-form-item>
            <el-form-item size="large" style="float: right; margin: 0;">
                <reg-button content="Register" :event="onSubmit.bind(this)"></reg-button>
                <reg-button style="margin-left: 20px;" content="Back" 
                    @click.native="$router.push('/startup')" ></reg-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import regButton from '../../components/reg-button'
export default {
    name: 'reg-register',
    components: {
        regButton
    },
    data() {
        return {
            focusClass: '',
            loginData:{
                account: '',
                pwd: '',
                pwdAgain: ''
            },
            rules: {
                account: [
                    { required: true, message: 'Please enter your account number', trigger: 'blur' },
                    { min: 5, max: 40, message: 'The length is between 5 and 40 characters', trigger: 'blur' }
                ],
                pwd: [
                    { required: true, message: 'Please enter your password', trigger: 'blur' },
                    { min: 8, max: 16, message: 'The length is between 8 and 16 characters', trigger: 'blur' }
                ],
                pwdAgain: [
                    { required: true, message: 'Please enter your password again', trigger: 'blur' },
                    { min: 8, max: 16, message: 'The length is between 8 and 16 characters', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        onSubmit() {
            this.$refs['loginForm'].validate()
                .then((res)=>{
                    console.log(res)
                })
                .catch(err=>{
                    console.log(err);
                })
        }
    }
}
</script>
<style scoped lang="scss">
    @import '../../assets/css/theme.scss';
    .login_logo{
        position:fixed;
        left:0;
        top: 10px;
    }
    .login{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-image: url('/static/img/bg.png');
        background-repeat:no-repeat;
        background-size: 526px 416px;
    }
    .login-form{
        width: 70%;
        background: rgba(12, 12, 12, 0.1);
        padding: 20px;
        margin-top: 40px; 
    }
    /deep/ {
        &.el-form-item{
            margin-bottom: 30px;
        }
    }
    /deep/ .el-form-item__label{
        line-height: 20px;
        color: $assist1-color;
        padding: 0 0 5px;
    }
    /deep/ .el-input__inner{
        position: relative;
        z-index: 1000;
        border: none;
        background: $theme-color;
        color: $assist2-color;
    }
    /deep/ .el-input__inner::-webkit-input-placeholder {
         color: $assist2-color;
         text-align: right;
    }
    /deep/ .el-input::after{
        content: '';
        width: 102%;
        height: 120%;
        border: 1px solid $assist1-color;
        border-radius: 4px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        transition: opacity .5s ease-in-out;
        opacity: 0;
    }
    /deep/ .focusClass .el-input::after{
        opacity: 1;
    }
    /deep/ .el-form-item__error {
        top: 110%;
        font-size: 14px;
        padding-left: 80px;
    }
</style>