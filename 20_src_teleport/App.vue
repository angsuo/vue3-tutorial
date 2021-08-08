<template>
  <h1>Vue 3's teleport</h1>
  <div class="app">
    <h2>I'm the GrandFather</h2>
    <Son />
  </div>
</template>

<script>
import Son from "./components/Son.vue";
export default {
  name: "App",
  components: { Son },
};
</script>

<style scoped>
.app {
  background-color: grey;
  padding: 10px;
}
</style>