<template>
  <div>
    <h1>当前课程内容: </h1>
    <h2>{{ courseBasicInfo }}</h2>
    <router-view></router-view>
  </div>
</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
defineProps(['courseBasicInfo'])
</script>
<style scoped lang='scss'>
</style>