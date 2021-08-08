<template>
  <button @click="showDialog = true">Open dialog</button>
  <teleport to="body">
    <div class="mask" v-show="showDialog">
      <div class="dialog">
        <h2>I' a Dialog</h2>
        <button @click="showDialog = false">Close dialog</button>
      </div>
    </div>
  </teleport>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "Dialog",
  setup() {
    let showDialog = ref(false);

    return { showDialog };
  },
};
</script>

<style>
.dialog {
  position: absolute;
  top: 50%;
  left: 50%;
  transform:translate(-50%, -50%);
  text-align: center;
  height: 300px;
  width: 300px;
  background-color: yellowgreen;
}
.mask {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.777);
}
</style>