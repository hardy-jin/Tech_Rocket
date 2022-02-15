<template>
  <div>
    <h3>编辑练习</h3>
    <h4>{{ courseBasicInfo }}</h4>
  </div>
</template>
<script setup lang='ts'>
import { ref,reactive} from 'vue'
defineProps(['courseBasicInfo'])
</script>
<style scoped lang='scss'>
</style>