
<template>
  <div>
    <Content></Content>
    <button @click="changeMsg">改变msg</button>
    {{ msg }}
    <p>-----------------------</p>
    <!-- 模板会自动解析ref生成的value值 -->
    {{ counter }}
    <button @click="changeCounter">改变counter</button>
    <p>-----------------------</p>
    {{name}}
    {{obj.name}}
    <button @click="changeObj">改变obj</button>
    <p>-----------------------</p>
    {{obj.child.name}}
  </div>

</template>
<script>
import Content from './components/Content.vue'
import { ref, reactive,toRefs } from 'vue'
export default {
  data() {
    return {
      message: "helloWorld"
    }
  },
  components: {
    Content
  },
  // 组合式API，将同一个逻辑关注点相关的代码收集在一起
  setup() {
    //组件被创建之前执行，不需要使用this，this不会指向实例
    console.log("setup");
    // 没有响应式
    let msg = "hello";
    console.log(msg);
    function changeMsg() {
      msg = "你好"
      console.log(msg);  //数据不是响应式
    }
    // 通过ref定义响应式变量
    // ref是一个函数，返回带有value属性的对象
    const counter = ref(0)
    function changeCounter() {
      counter.value++
    }

    // 通过reactive定义响应式引用类型的数据
    const obj = reactive({
      name: "张三",
      age: 18,
      child:{
        name:"小张"
      }
    })
    function changeObj(){
      obj.name = "李四"
    }
    // toRefs（object） 使结构后的数据重新获得响应式
    let {name,child} = toRefs(obj)
    // 通过es6的扩展运算符进行结构会使得对象中的属性不是响应式的...obj
    return { msg, changeMsg, counter, changeCounter,obj,changeObj,...toRefs(obj),name,child }
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
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
