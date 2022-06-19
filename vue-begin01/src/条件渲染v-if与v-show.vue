<script>
export default {
  data() {
    return {
      age: 18,
      sex:"woman",
      isShow:true
    }
  }
}
</script>

<template>
  <p v-if="age > 18">我是成年人</p>
  <p v-else-if="age == 18">我今天正好18岁</p>
  <p v-else>我还是小朋友</p>
  <!-- 在 <template> 元素上使用 v-if 条件渲染分组 -->
  <template v-if="age >= 18">
    <p>你好</p>
    <p>你好</p>
    <p>你好</p>
    <p>你好</p>
  </template>
  <!-- v-show -->
  <p v-show="sex=='man'">男生</p>
  <p v-show="sex=='woman'">女生</p>
  <!-- v-show 只是简单地切换元素的 CSS property display -->
  <!-- v-if:只有后面为false，对应的元素以及子元素都不会被渲染，控制dom元素的创建和销毁 -->
  <h2 v-if="isShow">v-if展示</h2>
  <h2 v-show="!isShow">v-show展示</h2>
  <button @click="isShow = !isShow">改变展示效果</button>
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
