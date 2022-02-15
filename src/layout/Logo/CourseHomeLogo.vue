<template>
    <div class="logo">
        <img src="@/assets/Techboom.jpg" alt="logo" />
        <span class="title">Tech Boom</span>
    </div>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
.logo {
    width: 138px;
    background-color: #274FAE;
    height: 10%;
    border: none;
    line-height: 50px;
    margin: 0px;
    display: flex;
    align-items: center;
    padding-left: 1px;
    color: #fff;
    img {
        width: 50px;
        height: 50px;
        margin-right: 12px;
    }
    span {
        font-weight: 600;
        line-height: 50px;
        font-size: 10px;
        font-family: Helvetica Neue, Arial, Helvetica, sans-serif;
        vertical-align: middle;
    }
}
</style>