<template>
  <h1>Vue 3's customRef()</h1>
  <input type="text" v-model="keyword" ref="inputRef">
  <h3>Keyword: {{keyword}}</h3>
</template>

<script>
import { customRef } from '@vue/reactivity';
export default {
  name: "App",
  setup() {
    // building a self-made ref
    function myRef(value, delay=1000){
      // this function has to return a tracked value
      //    customRef get passed 2 functionms as arguments by Vue: 
      //      1. track
      //      2. trigger
      return customRef((track, trigger) => {
        // declare a scoped variable
        let thisTimer
        // return an object with getter and setter
        return {
          get(){
            // bad place to clearTimeout
            //  Because timer will just be called periodically
            // clearTimeout(thisTimer) 
            console.log("---customRef--- get() was called")
            track() // watch for trigger's call to reuse this getter
            return value
          },
          set(newValue){
            // each time setter is called before delay elapsed:
            //    clear the timeout to not call getter until delay elapsed
            //      -> now this is a debounce function with a delay
            clearTimeout(thisTimer) 
            console.log("---customRef--- set() was called with new Value", newValue)
              value = newValue
            thisTimer = setTimeout(() => {
              trigger() // tell the tracked getter to be called again
            }, delay);
          }
        }
      })
    }

    // let keyword = ref("hello") // normal way to declare a reactive value
    let keyword = myRef("hello") // using self-made ref

    return{
      keyword
    }
  },
  // focus input element on component mounted
  mounted(){
    this.$refs.inputRef.focus()
  }
};
</script>
