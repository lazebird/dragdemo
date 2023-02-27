<template>
  <a-row>
    <a-col :span="12">
      <div ref="edit_zone">
        <template v-for="index in 10" :key="index"><elem :data="{ text: 'A' + index }" /></template>
      </div>
    </a-col>
    <a-col :span="12">
      <div ref="ele_zone">
        <template v-for="index in 10" :key="index"><elem :data="{ text: 'B' + index }" /></template>
      </div>
    </a-col>
  </a-row>
</template>
<script setup>
  import { onMounted, ref } from 'vue';
  import Sortable from 'sortablejs';
  import elem from './elem.vue';

  const edit_zone = ref();
  const ele_zone = ref();

  function init() {
    let edit_opt = {
      group: {
        name: 'shared',
        pull: 'clone',
        put: true,
      },
      animation: 150,
      // onClone: onClone,
    };
    new Sortable(edit_zone.value, edit_opt);

    let ele_opt = {
      group: {
        name: 'shared',
        pull: 'clone',
        put: false,
      },
      animation: 150,
      onEnd: onClone,
    };
    new Sortable(ele_zone.value, ele_opt);
  }

  function onClone(evt) {
    console.log('evt ', evt);
    var e = evt.item; // var evt.clone;
    e.classList.add('new');
  }

  onMounted(() => init());
</script>
<style scoped>
  .new {
    background-color: green;
    color: white;
  }
</style>
