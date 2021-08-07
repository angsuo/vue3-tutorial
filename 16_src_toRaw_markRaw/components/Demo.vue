<template>
  <h1>Normal(reactive) person</h1>
  <h2>Name: {{person.name}}</h2>
  <button @click="person.name += 'J'">Change name</button>
  <h2>Salary: {{person.job.job1.salary}}</h2>
  <button @click="person.job.job1.salary++">Add salary</button>
  <hr>
  <button @click="addHobby">Add Hobby</button>
  <h2 v-if="person.hobby">Hobby: [{{person.hobby.type.toUpperCase()}}] {{person.hobby.name}}</h2>
  <button v-if="person.hobby" @click="changeHobby">Change hobby</button>
  <hr>
  <h1>Raw person</h1>
  <h2>Name: {{rawPerson.name}}</h2>
  <button @click="rawPerson.name += 'J'">Change name</button>
  <h2>Salary: {{rawPerson.job.job1.salary}}</h2>
  <button @click="rawPerson.job.job1.salary++">Add salary</button>
</template>

<script>
import { markRaw, reactive, toRaw } from "vue";
export default {
  name: "Demo",
  setup() {
    let person = reactive({
      name: "JJ",
      job: {
        job1: {
          salary: 30,
        },
      },
    });

    // will be transformed to a normal js Object {}
    //    Difference with readonly():
    //      Can be changed, but changes won't be detected by Vue
    let rawPerson = toRaw(person)

    function addHobby(){
      const hobby = {name: "LoL", type: "video game"}
      // instead of adding a reactive object to reactive data, will add a normal object
      person.hobby = markRaw(hobby)
    }

    function changeHobby(){
      // changes to a markRaw object won't be detected
      person.hobby.name+="!"
      person.hobby.type+="."
      console.log("Hobby now:",person.hobby)
    }

    return {
      person,
      rawPerson,
      addHobby,
      changeHobby
    };
  },
};
</script>
