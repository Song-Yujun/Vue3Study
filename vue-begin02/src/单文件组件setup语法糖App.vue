<script setup>
// 定义响应式的变量，还是需要从vue中引入
// 引入组件不需要注册
import Content from "./components/Content.vue";
import { ref } from "vue";
// 定义变量，在模板中使用不需要暴露出去，模板直接使用
const a = 20;

const b = ref(30);
function changeB() {
  b.value++;
}
</script>

<template>
  <div>
    <h2>{{ a }}</h2>
    <h2>{{ b }}</h2>
    <button @click="changeB">改变B的值</button>
    <Content />
  </div>
</template>




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
