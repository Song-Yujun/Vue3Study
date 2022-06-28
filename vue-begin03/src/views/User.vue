<template>
    <div>
        user
    </div>
</template>
<!----<script>
export default {
    props:["id"],
    mounted(){
        console.log(this.$route.params.id);
        // 通过props接收路由参数
        console.log(this.id);
    }
}
</script>
--->

<script setup>
    // $route当前活跃的路由对象（path、params、query、name）
    import {useRoute} from 'vue-router'
    console.log(useRoute().params.id);

    // 通过props接收路由参数
    const props = defineProps({
        id:String
    })
    console.log(props.id);
</script>


