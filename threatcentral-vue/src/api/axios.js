import axios from "axios"
import Cookies from "js-cookie"
import NProgress from "nprogress"
import { Message } from "element-ui"
import Router from "vue-router"
// axios默认配置
// axios.defaults.timeout = 100000 // 超时时间
axios.defaults.baseURL = process.env.API_HOST

// http request 拦截器
axios.interceptors.request.use(config => {
  // NProgress.start()
  return config
},
  error => {
    console.log(error);
    return Promise.reject(error.response)
  })

// http response 拦截器
axios.interceptors.response.use(
  response => {
    // NProgress.done()
    return response
  },
  error => {
    /*console.log("error", error);
    console.log(error.response.status);
    console.log(error.response.data.message);*/
    switch (error.response.status) {
      case 500:
        localStorage.removeItem("info");
        setTimeout(() => {
          location.reload()
        }, 1000);
        // Router.push({ path: '/login' })
        break;

      default:
        break;
    }

  })

let get = (url, data) => axios.get(url, { data });
let post = (url, data) => axios.post(url, data);
let deletes = (url, data) => axios.delete(url, { data });
let put = (url, data) => axios.put(url, data);

export default { get, post, deletes, put, axios }
