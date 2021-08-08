<template>
<div class="son">
  <h2>I'm the Son component</h2>
  <p>With some data: {{someData}}</p>
</div>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
    name:"Son",
    // since it's an async component, we can set an async setup
    async setup(){
        const someData = ref("long waited data")
        const p = new Promise((resolve) => {
            setTimeout(() => {
                resolve({someData})
            }, 3000);
        })
        // this is allowed since we've declared setup as asynchronous
        return await p
    }
}
</script>

<style scoped>
    .son{
        background-color: skyblue;
        padding: 10px;
    }
</style>