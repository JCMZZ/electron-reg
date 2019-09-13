<template>
    <div class="particulars">
        <div class="particulars_detail">
            <div class="info_avatar">
                <img src="/static/img/avatar.jpg" alt="">
            </div>
            <reg-info-item label="昵称" :content="userInfo.nickname"></reg-info-item>
            <reg-info-item label="生日" :content="userInfo.birthday"></reg-info-item>
            <reg-info-item label="邮箱" :content="userInfo.email"></reg-info-item>
            <reg-info-item label="毕业院校" :content="userInfo.academy"></reg-info-item>
            <reg-info-item label="工作单位" :content="userInfo.working_unit"></reg-info-item>
        </div>
        <div class="particulars_line"></div>
        <div class="particulars_desc">
            <reg-info-item label="一句话" :content="motto.substr(0,12)"></reg-info-item>
            <div class="info_item">{{motto.substr(12)}}</div>
            <reg-info-item label="个人描述" :content="user_desc.substr(0,12)"></reg-info-item>
            <div class="info_item">{{user_desc.substr(12, 22)}}</div>
            <div class="info_item">{{user_desc.substr(34)}}</div>
            <div class="user_label"><span>个人标签</span></div>
            <div class="user_label_tag">
                <el-tag class="eltag" v-for="val in userLabel" :key="val.label_id">{{val.label_name}}</el-tag>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import regInfoItem from '../../components/reg-info-item';
export default {
    name: 'particulars',
    data() {
        return {
            userInfo: {},
            userLabel: []
        }
    },
    components: {
        regInfoItem
    },
    computed: {
        ...mapGetters({
            userId: 'userId'
        }),
        motto() {
            return this.userInfo.motto || '';
        },
        user_desc() {
            return this.userInfo.user_desc || '';
        }
    },
    created() {
        this.getUserInfo();
    },
    methods: {
        getUserInfo() {
            this.$api.userInfo({
              params: { 
                userid: this.userId
              },
              success: ({success, result, message}) => {
                if (success) {
                    this.userInfo = result.user;
                    this.userLabel = result.labels;
                } else {
                  this.$elmsg.warning(message);
                }
              }
            });
        }
    }
}
</script>
<style lang="scss" scoped>
    @import "../../assets/css/theme.scss";
    .particulars{
        display: flex;
        width: 100%;
        height: 100%;
        background: #fff;
        justify-content: center;
        align-items: center;
    }
    .particulars_line {
        width: 2px;
        height: 70%;
        background: $assist2-color;
    }
    .info_avatar {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        overflow: hidden;
        margin-bottom: 30px;
    }
    .info_avatar>img{
        width: 100%;
        height: 100%;
    }
    .particulars_detail {
        width: 500px;
        height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
    .particulars_desc{
        box-sizing: border-box;
        width: 500px;
        padding: 20px;
        .info_item {
            width: 90%;
            height: 29px;
            border-bottom: 1px solid $theme-color;
            color: $assist2-color;
            margin-bottom: 20px;
        }
        .user_label {
            height: 23px;
            width: 90%;
            border-bottom: 1px solid $theme-color;
            text-align: center;
            span {
                background: $theme-color;
                border-radius: 5px 5px 0 0;
                font-weight: bold;
                padding: 5px 30px;
                color: $assist2-color;
            }
        }
        .user_label_tag{
            height: 120px;
            .eltag{
                margin: 2px;
                background: $theme-color !important;
            }
        }
    }
</style>