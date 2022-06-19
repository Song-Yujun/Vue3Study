
<template>
  <div>
    <Content></Content>
    <button @click="message = '你好'">改变message</button>
    {{ message }}
    <p>-----------------</p>
    {{ counter }}
    <button @click="changeCounter">改变counter</button>
    <p>-----------------</p>
    {{ user.name }}
    <button @click="changeName">改变name</button>
    <p>-----------------</p>
    {{ msg }}
    {{ reverseMsg }}
    <p>-----------------</p>
  </div>

</template>
<script>
import Content from './components/Content.vue'
import { ref, reactive, watch, watchEffect, computed } from 'vue'
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
    // counter操作
    const counter = ref(0)
    function changeCounter() {
      counter.value++
    }
    // watch(侦听的响应式引用，回调函数)
    // watch(counter, (newVal, oldVal) => {
    //   console.log("newVal:---", newVal);
    //   console.log("oldVal:---", oldVal);
    // })


    // user操作
    const user = reactive({
      name: "张三",
      age: 18
    })
    function changeName() {
      user.name = "李四"
    }
    // watch(user, (newVal, oldVal) => {
    //   console.log("newVal:---", newVal);
    //   console.log("oldVal:---", oldVal);
    // })
    // // watchEffect(回调函数)
    // // 注意不需要指定监听的属性，自动收集依赖,组件初始化的时候会自动执行一次回调函数
    // watchEffect(()=>{
    //   console.log("watchEffect：----",user.name);
    // })

    /**
     * watch和watchEffect的区别：
     * 1. watchEffect不需要指定监听的属性，自动收集依赖，只要在回调中引用到响应式的属性，只要这些属性发生改变，回调就会执行。
     *    watch只能侦听指定的属性，做出回调函数的执行，可以侦听多个，vue3开始后
     * 2. watch可以获取到新值和旧值，watchEffect获取不到
     * 3. watchEffect在组件初始化的时候就会自动执行一次，用来收集依赖，watch不需要，因为watch一开始就指定了依赖
     */

    const msg = ref("helloWorld")
    const reverseMsg = computed(() => {
      // 返回一个带有value属性的对象
      return msg.value.split("").reverse().join("")
    })

    return { counter, changeCounter, user, changeName, msg, reverseMsg }
  },
  watch: {
    // 选项式API
    message(newVal, oldVal) {

    }
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
