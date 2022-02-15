<template>
  <el-card class="box-card" shadow="never">
    <template #header>
      <div class="card-header">
        <span>最近通知</span>
        <el-button class="button" type="text">Operation button</el-button>
      </div>
    </template>
  </el-card>
</template>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  margin-bottom: 5%;
  width: auto;
  height: 20%;
  border-radius: 10px;
}
</style>