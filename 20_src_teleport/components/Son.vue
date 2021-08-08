<template>
<div class="son">
  <h2>I'm the Son component</h2>
    <GrandSon/>
</div>
</template>

<script>
import GrandSon from "./GrandSon.vue"
export default {
    name:"Son",
    components: {GrandSon}
}
</script>

<style scoped>
    .son{
        background-color: skyblue;
        padding: 10px;
    }
</style>