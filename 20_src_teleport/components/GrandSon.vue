<template>
<div class="grandson">
  <h2>I'm the GrandSon component</h2>
  <Dialog/>
</div>
</template>

<script>
import Dialog from "./Dialog.vue"
export default {
    name:"GrandSon",
    components:{Dialog}
}
</script>

<style scoped>
    .grandson{
        background-color: gold;
        padding: 10px;
    }
</style>