import axios from "axios";

import {
  asyncRouter,
  defaultRouter
} from "@/router";
import {
  forRoleList,
  formatList
} from './auth'

import LayoutApi from "@/api/apis/layout";

export default {
  state: {
    routers: defaultRouter,
    addRouters: [],
    roles: [],
    isCollapse: false,
    sysMonitor: false
  },
  getters: {
    roles: state => state.roles,
    addRouters: state => state.addRouters,
    sysMonitor: state => state.sysMonitor,
    isCollapse: state => state.isCollapse
  },
  mutations: {

    SET_ROLES: (state, args) => {
      state.roles = args;
    },

    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers;
      state.routers = defaultRouter.concat(routers);
    },

    TOGGLE_COLLAPSE: (state, args) => {
      state.isCollapse = args;
    },
    CHANGE_SYS: (state, args) => {
      state.sysMonitor = args;
    },
  },
  actions: {
    //登录
    /*LoginByUsername({
      commit
    }, userInfo) {
      return new Promise((resolve, reject) => {
        //只要登录就删除token
        axios.post('/yiiapi/site/login', {
          "LoginForm": userInfo,
          "login-button": ""
        }).then(resp => {

          //把工单中心上面tabs清空
          window.sessionStorage.removeItem('activeName');

          let datas = resp.data;

          let {
            status,
            msg,
            data
          } = datas;

          let tips = '输入用户名或密码错误';
          if (msg.username) {
            tips = msg.username[0];
          } else if (msg.password) {
            tips = msg.password[0];
          } else if (msg.allow_ip) {
            tips = msg.allow_ip;
          } else {
            tips = msg;
          }
          //用户名密码正确
          /!*if (status == 202 || status == 0) {
            let isTaken = (data == '') ? userInfo.username : data.token
            setToken(isTaken);
            commit('SET_TOKEN', isTaken);
            resolve([true, tips]);
            //用户名密码错误
          } else {
            resolve([false, tips]);
          }*!/
        }).catch(error => {
          console.log(error);
        })
      });
    },*/

    //获取全局权限
    async GetWholeAuth({
              commit,
              dispatch,
            }) {
      try {

        let resp = await axios('/api/site/menu');

        let roles = forRoleList(resp);

        roles = [...roles, '1001','1002','1003','1004','1005','1006','1007','1008','1009','1010'];

        console.log(roles);
        //roles = ['1','2','13','14','48']

        commit('SET_ROLES', roles);

        return roles;

      } catch (err) {
        console.log(err);
      }
    },

    //退出
    async LogOut({
      commit,
      dispatch
    }) {
      try {
        let resp = await axios('/api/site/logout');
        let {
          status,
          msg,
          data
        } = resp.data;

        if (status == 0) {
          commit('SET_ROLES', []);
        }
      } catch (err) {
        console.log(err);
      }
    },

    //获取动态路由组
    async GenerateRoutes({
                           commit
                         }, data) {
      return new Promise(resolve => {
        const {
          roles
        } = data;

        const accessedRouters = formatList(asyncRouter, roles);

        commit('SET_ROUTERS', accessedRouters);

        resolve();
      })
    }
  }
}
