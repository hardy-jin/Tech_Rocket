<template>
  <el-icon @click="changeIcon" class="icons">
   <component :is="status ?  Expand : Fold" />
  </el-icon>
</template>
<script setup lang='ts'>
import { computed } from 'vue';
import { Fold,Expand } from '@element-plus/icons-vue'
import { useStore } from '@/store'
const status = computed(()=>{
  return store.getters['getCollapse']
})
const store = useStore();
//搜索按钮切换事件
const changeIcon = ()=>{
  store.commit('setCollapse', !status.value); 
}
</script>
<style scoped lang='scss'>

.icons{
  display: flex;
  align-items: center;
  font-size: 22px;
  color: #303133;
  cursor: pointer;
}
</style>