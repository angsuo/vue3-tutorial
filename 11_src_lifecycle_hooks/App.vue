<template>
<button @click="showDemo = !showDemo">Toggle component</button>
  <Demo v-if="showDemo"/>
</template>

<script>
import { ref } from '@vue/reactivity';
import Demo from "./components/Demo.vue"
export default {
  name: "App",
  components: {Demo},
  setup(){
    const showDemo = ref(true)
    return {
      showDemo
    }
  }
};
</script>
