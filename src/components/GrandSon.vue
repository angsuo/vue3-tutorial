<template>
  <h2>I'm the GrandSon component</h2>
    <p>My GrandFather wants me to do {{job}}</p>
    <button @click="changeOrder">Change order</button>
</template>

<script>
import { inject } from '@vue/runtime-core'
export default {
    name:"GrandSon",
    setup(){
        const job = inject("todo")

        // any change to the injected data will be reflected across all parent & child
        function changeOrder(){
            job.value = "whatever I want"
        }
        return {job, changeOrder}
    }
}
</script>