<template>
  <Hello v-if="isShow"></Hello>
  <button @click="isShow=!isShow">控制hello组件</button>
</template>
<script>
import Hello from './components/Hello.vue'
export default {
  data() {
    return {
      isShow: true
    }
  },
  components: {
    Hello
  }
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
