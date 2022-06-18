<template>
    <div>
        <h2>我是content组件的内容</h2>
    </div>
    <div>
        <!-- <slot name="input"></slot>
        <slot name="h2"></slot> -->
        <slot :list="list"></slot>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: "world",
            list: [1, 2, 3, 4]
        }
    }
}
</script>