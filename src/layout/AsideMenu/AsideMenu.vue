<template>
    <el-menu
        :default-active="activeIndex"
        class="el-menu-vertical-demo"
        background-color="#274FAE"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
        unique-opened
        router
    >
        <MenuItem :menuList="menuList" :collapse="isCollapse" :displayID="displayID"></MenuItem>
    </el-menu>
</template>

<script setup lang="ts">
// import MenuLogo from './MenuLogo.vue'
import { reactive, computed } from 'vue'
import { useRoute } from 'vue-router';
import { useStore } from '@/store'
import MenuItem from './MenuItem.vue';


defineProps(['displayID', 'isCollapse'])

const store = useStore();
const route = useRoute();

//获取激活的菜单
const activeIndex = computed(() => {
    const { path } = route;
    console.log('current activated path => ' + path)
    return path;
})

const handleOpen = (key: string | number, keyPath: string) => {
    console.log(key, keyPath)
}
const handleClose = (key: string | number, keyPath: string) => {
    console.log(key, keyPath)
}

/* *
* 菜单数据 
* number: 2两个界面都显示， 1首页显示，0选择课程显示
*/
let menuList = reactive([
    {
        path: '/dashboard',
        number:2,
        meta: {
            title: "首页",
            icon: "Menu",
        },
    },
    {
        path: '/my-course',
        number:1,
        meta: {
            title: "我的课程",
            icon: "Notebook",

        },
        children: []
    },
    {
        path: route.path,
        name: "course-content",
        number:0,
        meta: {
            title: "课程内容",
            icon: "Reading",
            roles: ["sys:goods"],
            parentId: 0,
        },
    },
    {
        path: route.path + "/load-video",
        component: "Layout",
        alwaysShow: true,
        name: "load-video",
        Id: 0B10000,
        number:0,
        meta: {
            title: "上传视频",
            icon: "Film",
            roles: ["sys:goods"],
            parentId: 0,

        },
    },
    {
        path: route.path + "/edit-practice",
        component: "Layout",
        alwaysShow: true,
        name: "edit-practice",
        Id: 0B01000,
        number:0,
        meta: {
            title: "编辑练习",
            icon: "List",
            roles: ["sys:systemConfig"],
            parentId: 0,

        },
    },
    {
        path: route.path + "/comment",
        component: "Layout",
        alwaysShow: true,
        name: "comment",
        Id: 0B00100,
        number:0,
        meta: {
            title: "评价报告",
            icon: "UploadFilled",
            roles: ["sys:systemConfig"],
            parentId: 0,

        },
    },
    {
        path: route.path + "/load-courseware",
        component: "Layout",
        alwaysShow: true,
        name: "load-courseware",
        Id: 0B00010,
        number:0,
        meta: {
            title: "上传课件",
            icon: "FolderOpened",
            roles: ["sys:systemConfig"],
            parentId: 0,

        },
    },

    {
        path: "/calendar",
        name: "calendar",
        number:1,
        meta: {
            title: "日历",
            icon: "Calendar",
        },
    },
    {
        path: "/setting",
        name: "setting",
        number:1,
        meta: {
            title: "设置",
            icon: "Setting",
        },
    },
    {
        path: "/question",
        name: "question",
        number:1,
        meta: {
            title: "帮助",
            icon: "QuestionFilled",
        },
    },
]);
</script>

<style lang="scss">
.login {
    margin-left: 8px;
    margin-bottom: 0px;
}
</style>