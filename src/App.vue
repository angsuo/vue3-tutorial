<template>
  <h1>Ref usage in Vue 3</h1>
  <p>My name is {{ infos.name }}</p>
  <p>I'm {{ infos.age }} years old</p>
  <h2>During day, I like to:</h2>
  <ul>
    <li v-for="(hd, index) in infos.hobbies.day" :key="index">{{ hd }}</li>
  </ul>
  <div v-if="infos.hobbies.night">
  <h2 v-show="infos.hobbies.night">During night, if I feel happy, I'm {{ infos.hobbies.night.happy }}</h2>
  <h2 v-show="infos.hobbies.night">During night, if I feel sad, I'm {{ infos.hobbies.night.sad }}</h2>
  </div>
  <button @click="changeInfos">Change Infos</button>
  <br>
  <button @click="deleteHobby">Delete night hobby</button>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "App",
  setup() {
    // Using ES6's Proxy to setup data for (multi level)Arrays & Objects
    // for simple values just need ref
    // good to know: ref can take objects too, but will need to call data.value.prop
    const infos = reactive({
      name: "J",
      age: 18,
      hobbies: {
        day: ["food", "sport"],
        night: {
          happy: "drinking",
          sad: "sleeping",
        },
      },
    });
    function changeInfos() {
      // change value
      infos.name = "JJ"
    }
    function deleteHobby(){
      delete infos.hobbies.night
    }

    // return the data in a object
    return {
      infos,
      changeInfos,
      deleteHobby
    };
  },
};
</script>
