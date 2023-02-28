<template>
  <pkgVue />
  <br />
  <vuedraggableVue />
</template>
<script setup>
  import pkgVue from './views/pkg.vue';
  import vuedraggableVue from './views/vuedraggable.vue';
</script>
<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 60px; */
  }
</style>
