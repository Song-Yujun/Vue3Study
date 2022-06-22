<template>
    <div>
        user
    </div>
</template>

<script setup>
    import {useRoute} from 'vue-router'
    console.log(useRoute().params.id);
</script>


