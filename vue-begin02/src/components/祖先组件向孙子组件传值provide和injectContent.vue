<template>
  <div>
    <h2>{{ msg }}</h2>
    <p>--------------</p>
    {{ name }}
  </div>
</template>

<script>
import { ref, inject } from "vue";
export default {
  data() {
    return {
      msg: "我是Content组件",
    };
  },
  setup() {
    const name = inject("name");
    return {
      name,
    };
  },
};
</script>
