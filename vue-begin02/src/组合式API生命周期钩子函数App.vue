
<template>
  <div>
    <Content></Content>
    <p>-----------------</p>
  </div>

</template>
<script>
import Content from './components/Content.vue'
import { ref, reactive,onBeforeMount,onMounted,onBeforeUpdate,onUpdated } from 'vue'
export default {
  data() {
    return {
      message: "helloWorld"
    }
  },
  components: {
    Content
  },
  setup() {
    // 生命周期钩子函数可以执行多次
    // 生命周期钩子函数有一个参数,参数是一个回调函数
    onBeforeMount(()=>{
      console.log("onBeforeMount");
    })
    onBeforeMount(()=>{
      console.log("onBeforeMount");
    })
    onMounted(()=>{
      console.log("onMounted");
    })
  }

}
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
