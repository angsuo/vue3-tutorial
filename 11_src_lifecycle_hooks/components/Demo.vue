<template>
  <h1>Vue 3's lifecycle</h1>
  <h2>Count: {{ count }}</h2>
  <button @click="count++">Increase by 1</button>
</template>

<script>
import {onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref} from "vue";
export default {
  name: "Demo",
  setup() {
    const count = ref(0);
    console.log("---setup---")

    // lifecycle hooks as composition API
    onBeforeMount(() => console.log("---onBeforeMount"))
    onMounted(() => console.log("---onMounted---"))
    onBeforeUpdate(() => console.log("---onBeforeUpdate---"))
    onUpdated(() => console.log("---onUpdated---"))
    onBeforeUnmount(() => console.log("---onBeforeUnmount---"))
    onUnmounted(() => console.log("---onUnmounted---"))
    return {
      count
    };
  },
  // Lifecycle hooks still works as in Vue 2
  /* beforeCreate() { // don't have composition API equivalent
    console.log("---beforeCreate---")
  },
  created() { // don't have composition API equivalent
    console.log("---created---")
  },
  beforeMount() { // onBeforeMount in composition API 
    console.log("---beforeMount---")
  },
  mounted() { // onMounted in composition API
    console.log("---mounted---")
  },
  beforeUpdate() { // onBeforeUpdate in composition API
    console.log("---beforeUpdate---")
  },
  updated() { // onUpdated in composition API
    console.log("---updated---")
  },
  beforeUnmount() { // onBeforeUnmount in composition API
    console.log("---beforeUnmount---")
  },
  unmounted() { // onUnmounted in composition API
    console.log("---unmounted---")
  }, */
  };
</script>
