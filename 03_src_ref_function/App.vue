<template>
  <h1>Ref usage in Vue 3</h1>
  <p>My name is {{name}}</p>
  <p>I'm {{age}} years old</p>
  <h2>During day, I like to:</h2>
  <ul>
    <li v-for="(hd, index) in hobbies.day" :key="index">{{hd}}</li>
  </ul>
  <h2>During night, if I feel happy, I'm {{hobbies.night.happy}}</h2 >
  <h2>During night, if I feel sad, I'm {{hobbies.night.sad}}</h2 >
  <button @click="showInfos">Show Infos</button>
  <button @click="changeInfos">Change Infos</button>
</template>

<script>
import {ref} from "vue"
export default {
  name: 'App',
  setup() {
    // // fixed data
    // let name = "J"
    // let age = 18

    // declare referenced data
// returns a new RefImpl object for simple values
    let name = ref("J") 
    let age = ref(18)
    // returns a reactive object (Proxy) for objects
    let hobbies = ref({ // r
      day:["food", "sport"],
      night: {
        happy: "drinking",
        sad: "sleeping"
      }
    })

    // declare method
    function showInfos(){
      console.log("name:", name)
      console.log("hobbies:", hobbies)
      console.log("hobbies.day", hobbies.value.day)
    }
    function changeInfos(){
      name.value = "JJ"
      age.value ++
      // don't know how to change referenced object yet
    }

    // return the data in a object
    return {
      name,
      age,
      hobbies,
      showInfos,
      changeInfos
    }
  }
}
</script>
