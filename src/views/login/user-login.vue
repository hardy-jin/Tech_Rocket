<template>
  <div class="logincontainer">
    <el-form class="loginForm" ref="loginForm" :inline="false">
      <el-form-item>
        <div class="loginTitle">系统登录</div>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="请输入账户" v-model="userid" type="userid" name="userid"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="请输入密码" v-model="password" type="password" name="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-row :gutter="20" style="margin-top: 10px;">
          <el-col :span="24">
            <el-button class="mybtn" type="primary" size="default" @click="login">登录</el-button>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LoginUser',
  data() {
    return {
      userid: '',
      password: ''
    }
  },
  methods: {
    login() {
      (this as any).$store
        .dispatch('login', {
          userid: this.userid,
          password: this.password
        })
        .then(() => {
          this.$router.push('/my-course')
        })
        .catch((error: any) => {
        console.log(error)
        })
    }
  }
})
</script>

<style scoped lang='scss'>
.logincontainer {
  height: 100%;
  display: flex;
  justify-content: center; 
  align-items: center; 
  .loginForm {
    height: 320px;
    width: 400px;
    border-radius: 10px; 
    padding: 20px 35px;
    box-shadow: 0 0 25px #cac6c6;
    .loginTitle {
      font-size: 24px;
      font-weight: 600;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .mybtn {
      width: 100%;
    }
  }
}
</style>
