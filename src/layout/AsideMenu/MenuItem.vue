<template>
    <template v-for="menu in menuList" :key="menu.path">

    <el-sub-menu v-if="menu.children && menu.children.length > 0" :index="menu.path" :key="menu.path">
      <template #title>
        <component class="icon" :is="menu.meta.icon"/>
        <span>{{ menu.meta.title }}</span>
      </template>
      <menu-item :menuList="menu.children"></menu-item>
    </el-sub-menu>
    
    <el-menu-item 
    v-else 
    v-if="menu.number==2 || menu.number==displayID"
    :index="menu.path" >
        <component v-if='collapse' class="icon_collapse" :is="menu.meta.icon"/>
        <component v-else class="icon" :is="menu.meta.icon"/>
        <template #title>{{ menu.meta.title }}</template>
    </el-menu-item>
   </template>
</template>

<script setup lang="ts">
defineProps(['menuList','collapse','displayID'])
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 140px;
    height:90%;
}

.el-menu--collapse {
  height: 90%;
}
  
.el-sub-menu .el-sub-menu__title {
    color: #FFFFFF !important;
}
.el-submenu.is-active .el-submenu__title {
    border-bottom-color: #e6ecf8;
    background-color: #e6ecf8;
}

.el-menu .el-menu-item {
    color: #FFFFFF;
}

/* 菜单点中文字的颜色 */
.el-menu-item.is-active {
    color: #274FAE !important;
    background-color: #e6ecf8!important;
    /* border-radius: 20px; */
}
/* 当前打开菜单的所有子菜单颜色 */
.is-opened .el-menu-item {
    background-color: #274FAE !important;
}
/* 鼠标移动菜单的颜色 */
.el-menu-item:hover {
    color: #274FAE;
    background-color: #e6ecf8 !important;
    /* border-radius: 20px; */
}

.icon {
    width: 18px;
    height: 18px;
    margin-right: 8px;
}
.icon_collapse {
    width: 18px;
    height: 18px;
    margin-right: 5px;
    margin-bottom: 19px;
}
</style>