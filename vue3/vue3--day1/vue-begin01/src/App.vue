<script>
import Content from "./components/Content.vue";
export default {
  data() {
    return {
      message: "hello"
    };
  },
  components: {
    Content,
  },
};
</script>

<template>
  <div>
    <Content><button>我是按钮</button></Content>
    <p>------------------------------------------</p>
    <!-- 如果有多个值，同时放入组件进行替换时，一起作为替换元素 -->
    <Content>
      <!-- v-slot 只能添加在 `<template>` 上 -->
      <!-- 父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。 -->
      <template v-slot:input><input type="text"></template>
      <template v-slot:h2>
        <h2>这是插槽{{ message }}</h2>
      </template>
    </Content>
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
