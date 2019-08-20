<template>
    <button class="reg-btn" @click.self="event">
        {{content}}
    </button>
</template>
<script>
export default {
    name: 'reg-button',
    props: {
        event: {
            type: Function,
            default: () => {}
        },
        content: {
            type: String,
            default: 'REG-BTN'
        }
    }
}
</script>
<style scoped lang="scss">
@import '../../assets/css/theme.scss';
.reg-btn{
    width: 140px;
    height: 40px;
    text-align: center;
    box-sizing: border-box;
    border: 3px solid $theme-color;
    background: transparent;
    color: $assist1-color;
    position: relative;
    letter-spacing: 10px;
    text-indent: 10px;
    text-align: center;
    outline: none;
    font-weight: bold;
    cursor: pointer;
}
.reg-btn:hover{
    box-shadow: 0 0 2px 1px rgba(16, 27, 45, 0.685);
}
.reg-btn::before{
    box-sizing: border-box;
    content: '';
    border: 1px solid $theme-color;
    position: absolute;
    width: 130px;
    height: 30px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
}
</style>