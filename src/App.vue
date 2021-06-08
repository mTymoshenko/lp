<template>
  <main-layout class="root">
    <transition name="fade">
      <router-view />
    </transition>
  </main-layout>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue';

export default {
  components: { MainLayout },
};
</script>

<style lang="scss">
  body, html {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  .root {
    min-height: 100vh;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

</style>
