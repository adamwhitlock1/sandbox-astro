<template>
  <div :style="{ border: '3px dotted aquamarine', padding: '20px' }">
    <div>This is Vue</div>
    <div>Count: {{ count }}</div>
    <div>Double Count: {{ doubleCount }}</div>
    <button @click="increaseSingleCount">Increase Single Count</button>
    <button @click="increaseDoubleCount">Increase Double Count</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getState, setState, subscribe } from "../store";
const count = ref(getState().count);
const doubleCount = ref(getState().doubleCount);

function increaseSingleCount() {
  setState({ count: getState().count + 1 });
}

function increaseDoubleCount() {
  setState({ doubleCount: getState().doubleCount + 2 });
}

subscribe(() => {
  count.value = getState().count;
  doubleCount.value = getState().doubleCount;
});
</script>
