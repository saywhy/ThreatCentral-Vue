import Vue from "vue";
import ElementUI from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"
import App from "./App.vue";
import router from "./router";
import store from "./store";

import NProgress from "nprogress"

import "@/router/permission"

import "nprogress/nprogress.css"
// import "@assets/css/common.less"
import OEM from '@assets/js/OEM.js'
Vue.prototype.OEM = OEM;

Vue.config.productionTip = false;
Vue.use(ElementUI);


// NProgress.inc(0.2)
// NProgress.configure({ easing: "ease", speed: 500, showSpinner: false })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
