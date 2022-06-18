<template>
    <h2>hello组件</h2>
    <h2>{{counter}}</h2>
    <button @click="counter++">改变counter</button>
</template>
<script>
export default {
    data(){
        return {
            counter:0
        }
    },
    beforeCreate() {
        console.log("beforeCreate");
    },
    created() {
        console.log("created");
    },
    beforeMount() {
        console.log("beforeMount");
    },
    mounted() {
        console.log("mounted");
    },
    beforeUpdate() {
        console.log("beforeUpdate");
    },
    updated() {
        console.log("updated");
    },
    beforeUnmount(){
        console.log("beforeUnmount");
    },
    unmounted(){
        console.log("unmounted");
    }

}
</script>