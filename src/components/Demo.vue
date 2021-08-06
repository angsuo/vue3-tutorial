<template>
  <h1>Vue 3's setup() runs before beforeCreate</h1>
  <p>My name is {{ data.name }}</p>
  <p>I'm {{ data.age }} years old</p>
  <button @click="emitEvent">Emit an event</button>
  <slot name="customSlot"></slot>
  </template>

<script>
import { reactive } from "vue";
export default {
  name: "Demo",
  /* beforeCreate(){
      console.log("beforeCreate()")
  }, */
  // need to declare passed props to use them in setup()
  props: ["msg", "count"],
  // need to declare events emitted from this component
  emits: ["someEvent"],
  setup(prop, ctx) {
      // to show that setup() is called before beforeCreate()
    //   console.log("setup()")

    // show params passed to setup()
    console.log(prop, ctx)

    return {
      data: reactive({
      name: "J",
      age: 18,
    },),
    emitEvent(){
        ctx.emit("someEvent")
    }
    };
  },
};
</script>
