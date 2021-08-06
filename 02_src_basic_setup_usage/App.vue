<template>
  <h1>Hello Vue 3</h1>
  <p>My name is {{name}}</p>
  <p>I'm {{age}} years old</p>
  <p>My sex is: {{sex}}</p>
  <p>The winner is: {{compet}}</p>
  <button @click="sayHello">Say Hello</button>
  <button @click="sayWelcome">Say Hello(Vue 2)</button>
  <hr>
  <button @click="showV3Data">Show Vue 3 data with Vue 2 methods</button>
  <hr>
  <button @click="showV2Data">Show Vue 2 data with Vue 3 methods</button>
  <hr>
  <button @click="showV3This">Show "this" in setup()</button>
</template>

<script>
// if need to use "createElement"
// import {h} from "vue"

export default {
  name: 'App',
  // vue 2 properties still work
  data(){
    return {
      sex: "Unsexed",
      compet:"V2"
      }
  },
  methods: {
    sayWelcome(){
      alert("Welcome")
    },
    showV3Data(){
      console.log("Sex:", this.sex)
      console.log("name:", this.name)
      this.sayHello()
    }
  },
  // everything in vue 2 is returned in setup
  setup() {
    // data
    let name = "J"
    let age = 18
    // duplicate with Vue2's data(): the setup's value will be taken
    let compet = "V3"

    // methods
    function sayHello(){
      alert(`My name is ${name}, I'm ${age} yo`)
    }


    function showV2Data(){
      console.log("sex:", this.sex) // undefined
      this.sayWelcome() // error
    }

    function showV3This(){console.log(this)}

    // return the data in a object
    return {
      name,
      age,
      compet, // linting error for duplicate declaration
      sayHello,
      showV2Data,
      showV3This
    }

    // return a callback function (h from vue 2)
    // return () => h("h1", "I'm feeling alone")
  }
}
</script>
