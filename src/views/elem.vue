<template>
  <div @dblclick="onDbClick(data)">
    <div class="text" v-if="data.row !== undefined && (data.row & 1) === 0">{{ data.id }}</div>
    <div>{{ toText(data) }}</div>
    <div class="text" v-if="data.row !== undefined && (data.row & 1) === 1">{{ data.id }}</div>
  </div>
</template>
<script setup>
  defineProps({ data: { type: Object, required: true } });
  const emits = defineEmits(['dbclick']);

  const toText = (info) => (info.id ? (info.row ? `P${info.id}` : `N${info.id}`) : '.placeholder');
  const onDbClick = (p) => emits('dbclick', p);
</script>
<style scoped>
  div {
    padding: 4px;
    width: 80px;
    cursor: move;
  }
</style>
