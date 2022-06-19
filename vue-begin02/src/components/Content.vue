<template>
    <div>
        <h2>{{ msg }}</h2>
        <p>--------------</p>
        {{ message }}
        <p>--------------</p>
        <button @click="sendParent">发送数据</button>
    </div>

</template>

<script>
import { ref, onUpdated, toRefs,h } from 'vue'
export default {
    data() {
        return {
            msg: "我是Content组件"
        }
    },
    props: {
        message: {
            type: String,
            default: "你好"
        }
    },
    setup(props, context) {
        // const {message} = toRefs(props)
        // onUpdated(()=>{
        //     console.log(message.value);
        // })
        // 可以接收组件上面的属性(非响应式)
        console.log(context.attrs);
        const counter = ref(20)
        function sendParent() {
            context.emit("injectCounter", counter.value)
        }
        // return { sendParent }
        // h为渲染函数
        context.expose({
            sendParent,counter
        })
        return () => h('div', counter.value)
    }
}
</script>
