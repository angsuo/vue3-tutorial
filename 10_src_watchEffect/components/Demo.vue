<template>
  <h1>Vue 3's watch() on ref()</h1>
  <h2>Count: {{ count }}</h2>
  <button @click="count++">Increase by 1</button>
  <hr />
  <h2>Message: {{ msg }}</h2>
  <button @click="msg += 'e'">Add "e"</button>
  <hr />
  <h2>{{ person.name }}'s salary: {{ person.job.job1.salary }}k</h2>
  <button @click="person.name += 'J'">Change name</button>
  <button @click="person.job.job1.salary++">Add salary</button>
</template>

<script>
import { reactive, ref, watch, watchEffect } from "vue";
export default {
  name: "Demo",
  setup() {
    const count = ref(0);
    const msg = ref("ye");
    const person = reactive({
      name: "JJ",
      job: {
        job1: {
          salary: 30,
        },
      },
    });

    // watch a value
    /* watch(
      count,
      (toValue, oldValue) => {
        console.log(`Count changed from ${oldValue} to ${toValue}`)
      },
      { immediate: true}
    ); */

    // watchEffect usage is quite like computed():
    //    each time an used value changed, runs the callback
    watchEffect(() => {
      if(person.job.job1.salary > 33){
        // even if this isn't called, on each time a value is changed runs all the callback body
        console.log("yeeee too much monthly salary")
      }
      console.log("watchEffect's callback fully called")
    })


    return {
      count,
      msg,
      person,
    };
  },
};
</script>
