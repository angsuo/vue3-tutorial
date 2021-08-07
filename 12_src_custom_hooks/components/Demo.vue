<template>
  <h2>Count: {{ count }}</h2>
  <button @click="count++">Increase by 1</button>
  <hr>
  <h2>Get Mouse clicked position</h2>
  <p v-if="pointer.x != null && pointer.y!= null">Mouse clicked at: X: {{pointer.x}}, Y: {{pointer.y}}</p>
</template>

<script>
import {ref} from "vue"
import usePointer from "../hooks/usePointer"
export default {
  name: "Demo",
  setup() {
    const count = ref(0);

    // custom hook declared in another .js file
    // hooks works like Vue 2's mixins
    // and can be reused in any component
    const pointer = usePointer()

    return {
      count,
      pointer
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
