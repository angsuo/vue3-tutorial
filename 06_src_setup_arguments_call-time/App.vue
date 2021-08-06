<template>
  <Demo msg="Hello" :count="0" @someEvent="handleSomeEvent">
    <template v-slot:customSlot>
    <h2>this is inserted Slot named "customSlot"</h2>
    </template>
  </Demo>
</template>

<script>
import Demo from "./components/Demo.vue"
export default {
  name: "App",
  components: {Demo},
  setup() {
    return {
      handleSomeEvent(){
        alert("Got event")
      }
    }
  }
};
</script>
