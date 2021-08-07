<template>
  <h2>{{ name }}'s salary: {{ salary }}k</h2>
  <button @click="name += 'J'">Change name</button>
  <button @click="salary++">Add salary</button>
</template>

<script>
import { reactive, toRef, toRefs } from "vue";
export default {
  name: "Demo",
  setup() {
    const person = reactive({
      name: "JJ",
      job: {
        job1: {
          salary: 30,
        },
      },
    });

    // this will only register a new ref of a simple string
    //    if name1 is changed, the original value is preserved
    // const name1 = ref(person.name)

    // this will register a reference of a (k,v) pair of an object
    //    if name2 is changed, the original valus is too
    // const name2 = toRef(person, "name")

    

    return {
      // name: person.name, // not reactive: simple string
      // name: toRef(person, "name"), // reactive: changes will be reflected on person's data
      // salary: person.job.job1.salary // not reactive: simple int
      salary: toRef(person.job.job1, "salary"),
      // toRefs(obj) will register all keys of obj as separated RefImpl{}
    //    but if nested object (like job here), will stop at lvl 1
    //    to call salary, will need to call job.job1.salary in <template>
    ...toRefs(person)
    };
  },
};
</script>
