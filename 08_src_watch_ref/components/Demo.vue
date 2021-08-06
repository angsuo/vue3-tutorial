<template>
  <h1>Vue 3's watch() on ref()</h1>
  <h2>Count: {{ count }}</h2>
  <button @click="count++">Increase by 1</button>
  <hr />
  <h2>Message: {{ msg }}</h2>
  <button @click="msg += 'e'">Add "e"</button>
</template>

<script>
import { ref, watch } from "vue";
export default {
  name: "Demo",
  setup() {
    const count = ref(0);
    const msg = ref("ye");

    // use watch on a single ref value
    watch(count, (next, prev) =>
      console.log("Count going from", prev, "to", next)
    );

    // use watch on multiple ref values
    watch(
      [count, msg],
      (next, old) => console.log("Going from", old, "to", next),
      { immediate: true }
    );

    return {
      count,
      msg,
    };
  }
};
</script>
