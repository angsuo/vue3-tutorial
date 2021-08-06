<template>
  <h1>Vue 3's watch() on ref()</h1>
  <h2>Count: {{ count }}</h2>
  <button @click="count++">Increase by 1</button>
  <hr />
  <h2>Message: {{ msg }}</h2>
  <button @click="msg += 'e'">Add "e"</button>
  <hr>
  <h2>{{person.name}}'s salary: {{person.job.job1.salary}}k</h2>
  <button @click="person.name+='J'">Change name</button>
  <button @click="person.job.job1.salary++">Add salary</button>
</template>

<script>
import { reactive, ref, watch } from "vue";
export default {
  name: "Demo",
  setup() {
    const count = ref(0);
    const msg = ref("ye");

    const person = reactive({
      name: "JJ",
      job:{
        job1:{
          salary: 150
        }
      }
    })

    // use watch on a single ref value
    // watch(count, (next, prev) =>
    //   console.log("Count going from", prev, "to", next)
    // );

    // use watch on multiple ref values
    // watch(
    //   [count, msg],
    //   (next, old) => console.log("Going from", old, "to", next),
    //   { immediate: true }
    // );

    /* use watch on reactive data
        1. newValue === oldValue (can't get the state before change)
        2. {deep: false} option can't be disabled
    */
    // watch(person, (newValue, oldValue)=> {
    //   console.log("Detected changes on person")
    //   console.log("New value:", newValue)
    //   console.log("Old Value:", oldValue)
    //   console.log("new === old:", newValue === oldValue)
    // })

    // use watch on a reactive data's simple property
    //    the value has to be returned from a function
    // watch(() => person.name, (newName, oldName) => {
    //   console.log("Changed name from", oldName, 'to', newName)
    // })

    // use watch on a reactive data's property with object as value
    //    newJob === oldJob
    watch(()=> person.job, (newJob, oldJob) => {
      console.log("Detected changes for person.job")
      console.log("Old job:", oldJob)
      console.log("New job:", newJob)
      console.log("newJob === oldJob:", newJob === oldJob)
    }, {deep: true}) // need {deep: true} because it's an object

    return {
      count,
      msg,
      person
    };
  }
};
</script>
