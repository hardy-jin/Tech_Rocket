<template>
  <div>首页</div>
  <el-popover
    placement="top-start"
    title="Title"
    :width="200"
    trigger="hover"
    content="this is content, this is content, this is content"
  >
    <template #reference>
      <el-button>Hover to activate</el-button>
    </template>
  </el-popover>
</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
</script>
<style scoped lang='scss'>
</style>