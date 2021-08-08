<template>
  <h1>Vue 3's verificators</h1>
  <p>isRef</p>
</template>

<script>
import { isProxy, isReactive, isReadonly, isRef, reactive, readonly, ref, toRefs } from '@vue/reactivity';
export default {
  name: "App",
  setup() {
    const name = ref("JJ")
    const age = ref({yearBorn: 1970})
    const future = reactive({goal: "set", difficulty: "Legendary"}) 

    // check if a variable is a ref
    console.log("name is a ref():", isRef(name))

    // check if a variable is a reactive
    console.log("future is reactive:", isReactive(future))

    // check if a variable is readonly
    console.log("future is readonly:", isReadonly(future))
    const future2 = readonly(future)
    console.log("Future-bis is readonly:", isReadonly(future2))

    // check if an object is reactive or readonly
    console.log("future is a proxy:", isProxy(future))
    console.log("future-bis is a proxy:", isProxy(future2))
    console.log("name is a proxy:", isProxy(name)) // a referenced value isn't a proxy
    console.log("age.value is a proxy:", isProxy(age.value)) // true
    console.log("age is a proxy:", isProxy(age)) // false

    return {
      name,
      ...toRefs(future)
    }
  }
};
</script>
