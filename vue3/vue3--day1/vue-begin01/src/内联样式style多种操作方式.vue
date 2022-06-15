<script>
export default {
  data() {
    return {
      activeColor: "red",
      fontSize: "50px",
      bgcolor: "pink",
      styleObj: { color: "red", fontSize: "50px", 'background-color': "pink" }
    }
  }
}
</script>

<template>
  <!-- 第一种：放置字符串 -->
  <p style="color:red">hello</p>
  <!-- 第二种：放置对象 -->
  <!-- <p :style="{key(css属性名):value(属性值，来自于data中的属性)}">hello</p> -->
  <!-- CSS property 名可以用驼峰式 (camelCase) 或短横线分隔 (kebab-case，记得用引号括起来) 来命名 -->
  <p :style="{ color: activeColor, fontSize: fontSize, 'background-color': bgcolor }">hello</p>
  <p :style="styleObj">hello</p>
  <p :style="[styleObj,{border:'5px solid blue'}]">hello</p>
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
