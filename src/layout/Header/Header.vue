<template>
    <div>
        <el-dropdown class="avatar-container hover-effect" trigger="click">
            <span class="el-dropdown-link">
                <el-avatar shape="circle" :size="40" :fit="'cover'">
                    <img src="@/assets/avatar.jpg" class="user-avatar" />
                </el-avatar>
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <router-link to="/profile">
                        <el-dropdown-item>个人中心</el-dropdown-item>
                    </router-link>
                    <router-link to="/my-course">
                        <el-dropdown-item>我的课程</el-dropdown-item>
                    </router-link>
                    <el-dropdown-item divided>退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.hover-effect {
    cursor: pointer;
    transition: background 0.3s;

    :hover {
        background: rgba(0, 0, 0, 0.025);
    }
}

.avatar-container {
    text-decoration: none;
    cursor: pointer;
    margin-top: 5px;
    margin-right: 30px;
    position: absolute;
    right: 15px;
    top: 1px;

    .user-avatar {
        cursor: pointer;
        width: 40px;
        height: 40px;
    }
}

a {
  text-decoration: none;
}
 
.router-link-active {
  text-decoration: none;
}

</style>