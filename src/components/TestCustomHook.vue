<template>
  <h2>I'm here to test custom hook</h2>
  <p v-if="pointer.x != null && pointer.y != null">Custom hook got: X: {{pointer.x}}, Y: {{pointer.y}}</p>
</template>

<script>
import usePointer from "../hooks/usePointer"
export default {
    name: "TestCustomHook",
    setup(){
        return {
            pointer: usePointer()
        }
    }
}
</script>

<style>

</style>