<template>
  <div>{{ data.text }}</div>
</template>
<script setup>
  defineProps({ data: { type: Object, required: true } });
</script>
<style scoped>
  div {
    padding: 6px;
    width: 80px;
    margin-bottom: 10px;
    cursor: move;
  }
</style>
