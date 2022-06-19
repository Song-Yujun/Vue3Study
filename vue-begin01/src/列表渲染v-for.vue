<script>
export default {
  data() {
    return {
      person: ["张三", "李四", "王五"],
      personal: { name: "张三", age: 18, sex: "男" }
    }
  },
  methods: {
    addPerson() {
      this.person.unshift("赵六")
    }
  }
}
</script>

<template>
  <!-- v-for -->
  <!-- v-for使用数组，item代表数组中的每一个元素，index代表数组中元素的下标 -->
  <p v-for="item in person" :key="item">{{ item }}</p>
  <p v-for="(item, index) in person" :key="index">{{ item }}--->{{ index }}</p>
  <ul>
    <li v-for="(item, index) of person" :key="index">{{ item }}--->{{ index }}</li>
  </ul>
  <!-- v-for 使用对象,item 表示的是键值，key表示的是键名，index表示的是索引 -->
  <ul>
    <li v-for="(item, key, index) in personal" :key="index">键名：{{ key }}---->键值{{ item }}---->索引：{{ index }}</li>
  </ul>

  <!-- 维护状态 -->
  <!-- 为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一 key attribute -->
  <!-- key：唯一的标识 -->  
  <!-- diff算法识别key，快速找到节点，减少渲染的次数，提高渲染的性能 -->
  <ul>
    <li v-for="item in person" :key="item"><input type="checkbox" name="" id="">{{ item }}</li>
  </ul>
  <button @click="addPerson">添加人员按钮</button>
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
