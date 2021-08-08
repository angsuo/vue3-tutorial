<template>
  <h1>Vue 3's provide() / inject()</h1>
  <h2>I'm the GrandFather</h2>
  <p>I want my children and grand-children to do {{childToDo}}</p>
  <button @click="changeTodo">Change idea</button>
  <hr>
  <Son/>
</template>

<script>
import { ref } from '@vue/reactivity';
import Son from "./components/Son.vue"
import { provide } from '@vue/runtime-core';
export default {
  name: "App",
  components: {Son},
  setup() {
    // declare a value to be passed to the child of my child
    //    can be either a ref() or a reactive()
    const childToDo = ref("medicine")

    // by providing, all children of any layer
    // will be able to inject("todo") and Proxy to the reactive value
    provide("todo", childToDo)

    function changeTodo(){
      childToDo.value = "whatever wanted"
    }

    return {
      childToDo,
      changeTodo
    }
  }
};
</script>
