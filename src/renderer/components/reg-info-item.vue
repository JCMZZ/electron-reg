<template>
    <div class="info_item">
        <div class="info_item_label">{{label}}</div>
        <div class="info_item_content">{{content}}</div>
    </div>
</template>
<script>
export default {
    name: 'reg-info-item',
    props: {
        label: {
            type: String,
            default: 'REG-LABEL'
        },
        content: {
            type: String,
            default: 'REG-CONTENT'
        }
    }
}
</script>
<style scoped lang="scss">
@import '../assets/css/theme.scss';
.info_item {
    width: 90%;
    height: 29px;
    border-bottom: 1px solid $theme-color;
    color: $assist2-color;
    margin-bottom: 20px;
    div{
        display: inline-block;
    }
    div:nth-child(1){
        width: 70px;
        background: $theme-color;
        border-radius: 5px 5px 0 0;
        font-weight: bold;
        padding: 5px 30px;
    }
    div:nth-child(2){
        padding: 5px 20px;
    }
}
</style>