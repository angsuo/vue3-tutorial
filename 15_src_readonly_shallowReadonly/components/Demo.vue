<template>
  <hr><hr>
  <h1>readonly()</h1>
  <h2>Name: {{personReadonly.name}}</h2>
  <button @click="personReadonly.name += 'J'">Change name</button>
  <h2>Salary: {{personReadonly.job.job1.salary}}</h2>
  <button @click="personReadonly.job.job1.salary++">Add salary</button>
  <hr>
  <h1>shallowReadonly()</h1>
  <h2>Name: {{personShallowReadonly.name}}</h2>
  <button @click="personShallowReadonly.name += 'J'">Change name</button>
  <h2>Salary: {{personShallowReadonly.job.job1.salary}}</h2>
  <button @click="personShallowReadonly.job.job1.salary++">Add salary</button>
</template>

<script>
import { reactive, readonly, shallowReadonly } from "vue";
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

    // Will prevent any edit of any level of person
    const personReadonly = readonly(person)

    const person2 = reactive({
      name: "AA",
      job: {
        job1: {
          salary: 3,
        },
      },
    });

    // Will prevent only 1st layer modification of person
    const personShallowReadonly = shallowReadonly(person2)
    
    

    return {
      personReadonly,
      personShallowReadonly
    };
  },
};
</script>
