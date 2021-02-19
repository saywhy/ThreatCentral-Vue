import axios from "../axios"
import loginUrls from "@api/urls/login"

import loginLayouts from "@api/urls/layout"

export default {
  // 账号密码登陆
  // / site / signin
  // POST",
  // LoginForm: {
  //   username: $scope.user.username,
  //   password: $scope.user.password
  // },

  // 登录
  fetchLogin (data) {
    return axios.post(loginUrls.login, data)
  },
  // 创建管理员
  fetchCreateAdmin (data) {
    return axios.post(loginUrls.CreateAdmin, data)
  },
  // 退出登录
  fetchLogout (data) {
    return axios.post(loginUrls.Logout, data)
  },

}
