<template>
  <div id="login">
    <el-form ref="form"
             :model="loginForm"
             label-width="80px">
      <el-form-item label="账号">
        <el-input type="text"
                  v-model="loginForm.username"
                  auto-complete="off"
                  placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password"
                  v-model="loginForm.password"
                  auto-complete="new-password"
                  placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   @click="submitForm">
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import LoginApi from "@/api/apis/login";
import LayoutApi from "@/api/apis/layout";
import { defaultRouter, asyncRouter } from "@/router/index";
import { json } from 'body-parser';
export default {
  name: '',
  data () {
    return {
      loginForm: {
        username: "admin",
        password: "Hoohoolab*123",
      },
    }
  },
  methods: {

    submitForm () {
      LoginApi.fetchLogin({ 'LoginForm': this.loginForm, "login-button": "" }).then(res => {
        console.log(res);
        //登陆成功
        localStorage.setItem("login", '202');
        this.$router.push({ path: "/home/overView" });
      }).catch(error => {
        console.log(error);
      })
    }
  },
  computed: {}
}
</script>
<style scoped>
</style>