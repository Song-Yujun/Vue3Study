<template>
  <div>
    <!-- 组件是带有名称的可复用的实例,单独模块功能的封装 -->
    <h2>我是content组件内容</h2>
    <h2>{{msg}}</h2>
    <button @click="msg='helloVue'">改变msg</button>
    <p>---------------------------------</p>
    <Hello :message="msg" aa="123" :list="list" />
    <p>---------------------------------</p>

    <button @click="sendToParent">提交数据给父组件</button>
  </div>
</template>
<script>
import Hello from "./Hello.vue";
export default {
  data() {
    return {
        msg:"我是content里面的数据",
        list:[1,2,3,4]
    };
  },
  methods:{
    // 在子组件中，通过$emit来触发事件
    sendToParent(){
      // this.$emit("自定义事件的名称","发送的事件参数")
      this.$emit('injectMsg',this.msg)
    }
  },
  components: {
    Hello,
  },
};
</script>