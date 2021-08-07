<template>
  <h1>shallowReactive()</h1>
  <h2>Name: {{person.name}}</h2>
  <button @click="person.name += 'J'">Change name</button>
  <h2>Salary: {{person.job.job1.salary}}</h2>
  <button @click="person.job.job1.salary++">Add salary</button>
  <hr>
  <h1>shallowRef()</h1>
  <h2>Age: {{age}}</h2>
  <button @click="age++">Increment Age</button>
  <h2>True age: {{trueAge.age}}</h2>
  <button @click="trueAge.age++">Increment true age</button>
</template>

<script>
import { shallowReactive, shallowRef } from "vue";
export default {
  name: "Demo",
  setup() {

    /* shallowReactive */
    // Only detects 1st level changes: name
    //  For nested properties: no detection
    const person = shallowReactive({
      name: "JJ",
      job: {
        job1: {
          salary: 30,
        },
      },
    });

    /* shallowRef */
    // changes to age will be reflected
    //  Works as simple ref() for primitive types of values (string, number)
    const age = shallowRef(18)

    // changes to trueAge.age won't be reflected
    const trueAge = shallowRef({
      age: 48
    })
    

    return {
      person,
      age,
      trueAge
    };
  },
};
</script>
