<template>
  <div>
    <h2>{{ msg }}</h2>
    <p>--------------</p>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  data() {
    return {
      msg: "我是Content组件",
    };
  },
  setup() {
    
  },
};
</script>
