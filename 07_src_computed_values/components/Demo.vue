<template>
  <h1>Vue 3's setup() runs before beforeCreate</h1>
  <p>First name: <input type="text" v-model="data.firstName" ref="fNameInput"></p>
  <p>Last name: <input type="text" v-model="data.lastName"></p>
  <p>Full name: <input type="text" v-model="data.fullName"></p>
</template>

<script>
import { computed, reactive } from "vue";
export default {
  name: "Demo",
  setup() {
    const data = reactive({
      firstName: "jj",
      lastName: "JJ"
    })
    
    // usage of computed: simplified
    // data.fullName = computed(() => data.firstName + " " + data.lastName)

    // usage of computed: full
    data.fullName = computed({
      get(){
        return data.firstName + "-" + data.lastName
      },
      set(value){
        const nameArr = value.split("-")
        data.firstName = nameArr[0]
        data.lastName = nameArr[1]
      }
    })

    return {
      data,
    };
  },
  mounted() {
    this.$refs.fNameInput.focus()
  },
};
</script>
