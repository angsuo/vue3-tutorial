<template>
  <h1>Vue 3's Custom Hooks</h1>
  <button @click="showDemo = !showDemo">Toggle component</button>
  <Demo v-if="showDemo" />
  <hr>
  <TestCustomHook/>
</template>

<script>
import { ref } from "@vue/reactivity";
import Demo from "./components/Demo.vue";
import TestCustomHook from "./components/TestCustomHook.vue"
export default {
  name: "App",
  components: { Demo, TestCustomHook },
  setup() {
    const showDemo = ref(true);
    return {
      showDemo,
    };
  },
};
</script>
