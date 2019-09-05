<template>
    <div class="particulars">
        <div class="particulars_detail">
            头像
        </div>
        <div class="particulars_line"></div>
        <div class="particulars_desc">
            详情
        </div>
    </div>
</template>
<script>
export default {
    name: 'particulars',
    data() {
        return {}
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
</style>