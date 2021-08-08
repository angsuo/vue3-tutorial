<template>
  <h1>Vue 3's Suspense component</h1>
  <div class="app">
    <h2>I'm the GrandFather</h2>
    <Suspense>
      <!-- to declare the component to wait -->
      <!-- We need a template with default slot -->
      <template v-slot:default>
       <Son /> 
      </template>
      <!-- to declare a fall back component while the default is charging -->
      <template v-slot:fallback>
        <h2>Waiting...</h2>
      </template>
    </Suspense>
  </div>
</template>

<script>
// import Son from "./components/Son.vue"; // classic way to import component

// To use Suspense component, first step is to declare an asynchronous child component
import { defineAsyncComponent } from '@vue/runtime-core';
// Import child component asynchronously as below: 
const Son = defineAsyncComponent(() => import("./components/Son.vue"))
export default {
  name: "App",
  components: { Son }, // still need to declare component to use
};
</script>

<style scoped>
.app {
  background-color: grey;
  padding: 10px;
}
</style>