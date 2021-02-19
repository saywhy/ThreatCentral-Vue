import Vue from "vue";
import ElementUI from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"
import App from "./App.vue";
import router from "./router";
import store from "./store";


import NProgress from "nprogress"

import "@/router/permission"

import "nprogress/nprogress.css"
import '@/assets/css/index.css'

import OEM from '@assets/js/OEM.js'
Vue.prototype.OEM = OEM;

Vue.config.productionTip = false;
Vue.use(ElementUI);

//全局路由钩子
router.beforeEach((to, from, next) => {
  NProgress.start();
  let locate = window.localStorage;
  var token = locate.getItem('token');

  if (token) { // 判断是否有token

    if (to.path === '/login') {
     /* next({
        path: '/'
      });*/
      //NProgress.done();
      next();
    } else {

      if (store.getters.roles.length === 0) {

        store.dispatch('GetWholeAuth').then(resp => { // 拉取info
          const roles = resp;
          if (roles == null) {
            store.dispatch('LogOut');
          } else {
            store.dispatch('GenerateRoutes', {
              roles
            })
              .then(() => { // 生成可访问的路由表
                // 动态添加可访问路由表
                router.addRoutes(store.getters.addRouters);
                next({ ...to, replace: true });
              })
          }
        }).catch(err => {

          NProgress.done();

          console.log(err);

        });

      } else {
        next();
      }
    }
  } else {
    /*if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next();
    } else {
      next('/login'); // 否则全部重定向到登录页
    }*/
    next();
  }
});

router.afterEach(() => {
  // finish progress bar
  NProgress.done();
})


// NProgress.inc(0.2)
// NProgress.configure({ easing: "ease", speed: 500, showSpinner: false })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
