<template>
  <el-container class="layout">
    <el-aside width="auto" class="aside">
      <MenuLogo></MenuLogo>
      <AsideMenu :displayID="displayID" :isCollapse="true"></AsideMenu>
    </el-aside>
    <el-container>
      <el-header class="header">
        <Header></Header>
      </el-header>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import AsideMenu from './AsideMenu/AsideMenu.vue'
import Header from './Header/Header.vue'
import MenuLogo from './Logo/IndexLogo.vue'
let displayID: number = 1;
</script>

<style lang="scss">
.layout{
    height: 100%;
    .aside{
       background-color: #F5F6F7;
    }
    .header{
        height: 50px;
        padding: 0 10px;
        display: flex;
        align-items: center;
        border-right: none;
    }
    .main{
        background-color: #F5F7FB;
    }
}
</style>