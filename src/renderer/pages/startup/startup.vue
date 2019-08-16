<template>
  <div class="start_main" @mouseenter="enterHandler">
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'startup',
    methods: {
      enterHandler() {
        console.log('触发')
      }
    }
  }
</script>

<style scoped>
  .start_main{
    height: 100%;
    width: 100%;
  }
</style>
