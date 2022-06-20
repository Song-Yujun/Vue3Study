
<template>
  <div>
    <Content></Content>
    <button @click="changeName">改变名字</button>
  </div>
</template>
<script>
import Content from "./components/Content.vue";
import { ref, provide } from "vue";
export default {
  data() {
    return {
      message: "helloWorld",
    };
  },
  components: {
    Content,
  },
  setup() {
    const name = ref("张三");
    function changeName() {
      name.value = "李四";
    }
    provide("name", name);
    return { changeName };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
