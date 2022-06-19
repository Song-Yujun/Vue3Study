<template>
  <div>
    <!-- 父子组件的访问方式 -->
    <!-- 父组件访问子组件，$refs  $children(vue3中已废弃) -->
    <!-- ref:用来给元素或者子组件注册引用信息 -->
    <!-- 子组件访问父组件，$parent(不建议使用，因为组件复用性很高) -->
    <!-- 子组件访问根组件，$root -->
    <Hello :message="msg" aa="123" :list="list" ref="hello" />
    <p ref="p"></p>
  </div>
</template>
<script>
import Hello from "./Hello.vue";
export default {
  data() {
    return {
        msg:"我是content里面的数据",
        list:[1,2,3,4],
        a:20
    };
  },
  mounted(){
    // console.log(this.$refs);
  },
  components: {
    Hello,
  },
};
</script>