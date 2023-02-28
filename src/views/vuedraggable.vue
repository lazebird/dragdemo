<template>
  <a-row>
    <a-col :span="16">
      <table>
        <tbody v-if="portData && portData.length">
          <tr v-for="(line, rindex) in portData" :key="rindex">
            <draggable v-model="portData[rindex]" :group="{ name: 'panel', pull: true, put: true }" @end="onMove" item-key="id" :id="rindex" class="row">
              <template #item="{ element: port }">
                <td> <elem :data="{ id: port.id, row: rindex }" @dbclick="onDbClick" /> </td>
              </template>
            </draggable>
          </tr>
        </tbody>
      </table>
    </a-col>
    <a-col :span="8">
      <draggable v-model="eleData" :group="{ name: 'element', pull: 'clone', put: false }" :sort="false" @end="onClone" item-key="id" style="display: flex; flex-flow: wrap">
        <template #item="{ element: port }">
          <elem :data="{ id: port.id }" />
        </template>
      </draggable>

      <draggable v-model="trashData" :group="{ name: 'trash', draggable: '.dropitem', put: true, pull: false }" class="dropzone trashzone" item-key="id" id="trash">
        <template #item="{ element: port }"> {{ port.id }}</template>
        <template #footer>Trash </template>
      </draggable>
    </a-col>
  </a-row>
  <a-modal v-model:visible="info.visible" title="Modify Port ID" @ok="handleOk"> {{ info.id }} --> <a-input-number ref="inputRef" v-model:value="info.newid" :min="1" :max="100" /> </a-modal>
</template>
<script setup>
  import { nextTick, onMounted, ref } from 'vue';
  import draggable from 'vuedraggable';
  import elem from './elem.vue';

  const inputRef = ref();
  const portData = ref([]);
  const eleData = ref([]);
  const trashData = ref([]);

  const info = ref({ visible: false });

  const unwrapref = (r) => JSON.parse(JSON.stringify(r));

  function init_data() {
    portData.value = [[], [], [{ id: 0 }]];
    for (let id = 1; id <= 12; id++) {
      if (id & 1) portData.value[0].push({ id });
      else portData.value[1].push({ id });
    }
    for (let id = 101; id <= 112; id++) eleData.value.push({ id });
  }

  function fixPlaceholder() {
    for (var i = 0; i < portData.value.length; i++) portData.value[i] = portData.value[i].filter((e) => e.id);
    portData.value = portData.value.filter((a) => a.length);
    portData.value.push([{ id: 0 }]);
    console.log('[fixPlaceholder] portData ', unwrapref(portData.value));
  }
  function onMove(evt) {
    console.log('[move] evt ', evt);
    let oldLine = parseInt(evt.from.id),
      newLine = parseInt(evt.to.id);
    let oldIndex = evt.oldIndex,
      newIndex = evt.newIndex;
    if (evt.to.id !== 'trash') console.log('[move] move %o from [%d][%d] to [%d][%d]', unwrapref(portData.value[newLine][newIndex]), oldLine, oldIndex, newLine, newIndex);
    else trashData.value = [];
    fixPlaceholder(); // re-calc array
  }
  function onClone(evt) {
    console.log('[clone] evt ', evt);
    if (evt.pullMode !== 'clone') return;
    fixPlaceholder(); // re-calc array
  }

  function onDbClick(port) {
    // console.log('[onDbClick] port ', unwrapref(port));
    if (port.row === undefined || port.id === undefined) return;
    info.value = { visible: true, ...port };
    nextTick(() => inputRef.value?.focus());
  }
  function handleOk() {
    const port = { ...info.value };
    console.log('[handleOk] port ', port);
    const p = portData.value[port.row].find((e) => e.id === port.id);
    p.id = port.newid;
    info.value = { visible: false };
  }

  onMounted(() => init_data());
</script>
<style scoped>
  .row,
  tr,
  tbody,
  table {
    width: 100%;
  }
  table {
    table-layout: fixed;
  }
  .dropzone {
    border: 1px dotted red;
    margin: 0.5rem;
    min-height: 20vh;
    width: 98%;
    position: relative;
  }

  .trashzone .dropitem {
    display: none;
  }

  .trashzone .footer {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .trashzone .dropitem + .footer {
    background: red;
    color: white;
  }
</style>
