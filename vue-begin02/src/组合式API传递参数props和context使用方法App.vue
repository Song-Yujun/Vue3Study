
<template>
  <div>
    <Content :message="message" class="box" id="content" @injectCounter="injectCounter" ref="content"></Content>
    <p>-----------------</p>
    <button @click="message = '你好'">改变message</button>

  </div>

</template>
<script>
import Content from './components/Content.vue'
import { ref, reactive, onBeforeMount, onMounted, onBeforeUpdate, onUpdated } from 'vue'
export default {
  data() {
    return {
      message: "helloWorld"
    }
  },
  components: {
    Content
  },
  methods: {
    injectCounter(value){
      console.log(value);
    }
  },
  mounted() {
    console.log(this.$refs.content);
    this.$refs.content.sendParent()
  },
  setup() {
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
