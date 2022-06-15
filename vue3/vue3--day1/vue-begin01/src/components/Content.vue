<template>
  <div>
    <!-- 组件是带有名称的可复用的实例,单独模块功能的封装 -->
    <Hello />
    <h2>我是content组件内容</h2>
    <h2>{{msg}}</h2>
    <button @click="msg='helloVue'">改变msg</button>
    <Hello />
  </div>
</template>
<script>
import Hello from "./Hello.vue";
export default {
  data() {
    return {
        msg:"helloworld"
    };
  },
  components: {
    Hello,
  },
};
</script>