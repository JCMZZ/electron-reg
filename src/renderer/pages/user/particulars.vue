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
            <!-- <reg-info-item label="一句话" :content="userInfo.motto"></reg-info-item> -->
        </div>
        <div class="particulars_line"></div>
        <div class="particulars_desc">
            
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
            userInfo: {}
        }
    },
    components: {
        regInfoItem
    },
    computed: {
        ...mapGetters({
            userId: 'userId'
        })
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
                    this.userInfo = result;
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
        width: 300px;
    }
</style>