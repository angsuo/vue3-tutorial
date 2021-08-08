<template>
  <h2>I'm the Son component</h2>
  <p>My parent wants my child to do {{todo}}</p>
    <hr>
    <GrandSon/>
</template>

<script>
import { inject } from '@vue/runtime-core'
import GrandSon from "./GrandSon.vue"
export default {
    name:"Son",
    components: {GrandSon},
    setup() {
        return {
            todo: inject("todo")
        }
    }
}
</script>