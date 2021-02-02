import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Login from "@/views/login/login"
import Layout from "@/views/layout/layout"
import axios from "@/api/axios";
Vue.use(VueRouter);

// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push (location) {
//   return originalPush.call(this, location).catch(err => err)
// }
let defaultRouter = [
  {
    path: "/",
    redirect: "/home/overView",
  },
  {
    path: "/login",
    component: Login,
    name: "Login",
  },
  {
    path: "/home",
    component: Layout,
    title: "首页",
    children: [
      {
        id: '2',
        path: '/home/overView',
        title: '总览',
        component: () => import('@/views/home/overView')
      },
      {
        id: '14',
        path: '/home/screen_index',
        title: '可视化大屏',
        redirect: '/screen'
      }
    ]
  },

];
const asyncRouter = [
  // 首页
  {
    id: '1',
    path: '/home/overView',
    title: '首页',
    component: Layout,
    children: [
      {
        id: '2',
        path: '/home/overView',
        title: '总览',
        component: () => import('@/views/home/overView')
      },
      {
        id: '14',
        path: '/home/screen_index',
        title: '可视化大屏',
        redirect: '/screen'
      }
    ]
  },
  // 情报
  {
    id: '15',
    path: '/intelligence/search',
    title: '情报',
    component: Layout,
    children: [
      {
        id: '16',
        path: '/intelligence/search',
        title: "情报查询",
        component: () => import('@/views/intelligence/search'),
      },
      {
        id: '24',
        path: '/intelligence/agent',
        title: "情报聚合",
        component: () => import('@/views/intelligence/agent'),
      },
      {
        id: '29',
        path: '/intelligence/share',
        title: "情报共享",
        component: () => import('@/views/intelligence/share'),
      },
      {
        id: '46',
        path: '/intelligence/management',
        title: "情报源管理",
        component: () => import('@/views/intelligence/management'),
      },
      {
        id: '50',
        path: '/intelligence/apt',
        title: "APT武器库",
        component: () => import('@/views/intelligence/apt'),
      },
    ]
  },
  // 资产
  {
    id: '54',
    path: '/assets/management',
    title: '资产',
    component: Layout,
    children: [
      {
        id: '55',
        path: '/assets/management',
        title: "资产管理",
        component: () => import('@/views/assets/management'),
      },
      {
        id: '72',
        path: '/assets/risky',
        title: "风险资产",
        component: () => import('@/views/assets/risky'),
      },
      {
        id: '184',
        path: '/assets/vehicle',
        title: "车辆资产",
        component: () => import('@/views/assets/vehicle'),
      },
      {
        id: '185',
        path: '/assets/accessory',
        title: "零配件资产",
        component: () => import('@/views/assets/accessory'),
      },
    ]
  },
  //预警
  {
    id: '77',
    path: '/alert/index',
    title: '预警',
    component: Layout,
    children: [
      {
        id: '78',
        path: '/alert/index',
        title: "威胁预警",
        component: () => import('@/views/alert/index'),
      },
      {
        id: '85',
        path: '/alert/loophole',
        title: "漏洞预警",
        component: () => import('@/views/alert/loophole'),
      },
      {
        id: '90',
        path: '/alert/darknet',
        title: "暗网预警",
        component: () => import('@/views/alert/darknet'),
      },
      {
        id: '2051',
        path: '/alert/vehiclealert',
        title: "车联网预警",
        component: () => import('@/views/alert/vehiclealert'),
        children: [
          {
            id: '205',
            path: '/alert/vehiclealert',
            title: "车联网预警",
            component: () => import('@/views/alert/vehiclealert'),
          },
        ]
      },
    ]
  },
  // 报表
  {
    id: '127',
    path: '/report/creat',
    title: "报表",
    component: Layout,
    children: [
      {
        id: '128',
        path: '/report/creat',
        title: "报表生成",
        component: () => import('@/views/report/creat'),
      },
      {
        id: '129',
        path: '/report/send',
        title: "报表发送",
        component: () => import('@/views/report/send'),
      },
    ]
  },
  // 设置
  {
    id: '93',
    path: '/seting/network',
    title: "设置",
    component: Layout,
    children: [
      {
        id: '94',
        path: '/seting/network',
        title: "网络配置",
        component: () => import('@/views/seting/network'),
      },
      {
        id: '97',
        path: '/seting/notice',
        title: "威胁通知",
        component: () => import('@/views/seting/notice'),
      },
      {
        id: '104',
        path: '/seting/loopholeCorrelation',
        title: "漏洞关联",
        component: () => import('@/views/seting/loopholeCorrelation'),
      },
      {
        id: '130',
        path: '/seting/centralizedManagement',
        title: "集中管理",
        component: () => import('@/views/seting/centralizedManagement'),
      },
      {
        id: '110',
        path: '/seting/user',
        title: "账号管理",
        component: () => import('@/views/seting/user'),
      },
      {
        id: '126',
        path: '/seting/log',
        title: "审计日志",
        component: () => import('@/views/seting/log'),
      },
      {
        id: '229',
        path: '/seting/syslog',
        title: "SYSLOG配置",
        component: () => import('@/views/seting/syslog'),
      },

      {
        id: '151',
        path: '/seting/api',
        title: "情报API",
        component: () => import('@/views/seting/api'),
      },
      {
        id: '236',
        path: '/seting/licens',
        title: "离线更新",
        component: () => import('@/views/seting/licens'),
      },
      {
        id: '223',
        path: '/seting/licens',
        title: "许可证",
        component: () => import('@/views/seting/licens'),
      },
      {
        id: '181',
        path: '/seting/labelManage',
        title: "标签管理",
        component: () => import('@/views/seting/labelManage'),
      },
      {
        id: '182',
        path: '/seting/specialIntelligence',
        title: "行业情报管理",
        component: () => import('@/views/seting/specialIntelligence'),
      },
      {
        id: '183',
        path: '/seting/loopholeIntelligence',
        title: "漏洞情报管理",
        component: () => import('@/views/seting/loopholeIntelligence'),
      },
      {
        id: '209',
        path: '/seting/baseIntelligence',
        title: "基础情报管理",
        component: () => import('@/views/seting/baseIntelligence'),
      },
    ]
  }
]

export default new VueRouter({
  mode: "history", //去掉url中的#
  // 解决vue框架页面跳转有白色不可追踪色块的bug
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes: defaultRouter
})
export { defaultRouter, asyncRouter }