<script>
import Content from "./components/Content.vue";
export default {
  // 为什么data是函数,并且返回一个对象
  data() { // 让每一个组件都返回一个新的对象,不会造成数据污染
    return {
      message:""
    };
  },
  methods:{
    getChildMsg(value){
        console.log(value);
        this.message = value
    }
  },
  components: {
    Content,
  },
};
</script>

<template>
  <div>
    <!-- 拿到子组件Content的数据，通过自定义事件 -->
    <!-- 2.父组件中，通过v-on监听子组件中自定义的事件 -->
    <Content @injectMsg="getChildMsg" />
    <h2>{{message}}</h2>
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
