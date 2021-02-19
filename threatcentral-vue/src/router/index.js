import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/layout/layout"
Vue.use(VueRouter);

// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push (location) {
//   return originalPush.call(this, location).catch(err => err)
// }
let defaultRouter = [
  {
    path: '/',
    name: 'main',
    component: Layout,
    redirect: '/main_content',
    children: [{
      path: '/main_content',
      name: 'main_content',
      component: () => import('@/views/layout/Main')
    }]
  },
  {
    path: "/login",
    name: "Login",
    component: () => import('@/views/login/login')
  }
];
const asyncRouter = [
  /*首页*/
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '首页',
      icon: 'e-nav-home',
      auth: '1'
    },
    params: {
      name: 'home'
    },
    component: Layout,
    children: [{
      path: '/home/overview',
      name: 'overview',
      meta: {
        title: '总览',
        auth: '2',
        icon: 'e-aside-overview',
        parentAuth: '1',
        rootAuth: '1',
        deep: 1
      },
      component: () => import('@/views/home/overview')
    }]
  },
  /*情报*/
  {
    path: '/intelligence',
    name: 'intelligence',
    meta: {
      title: '情报',
      icon: 'e-nav-handle',
      auth: '15'
    },
    component: Layout,
    children: [
      {
        path: '/intelligence/system',
        name: 'intelligence/system',
        meta: {
          title: '系统情报',
          auth: '1009',
          icon: 'e-aside-risks',
          parentAuth: '15',
          rootAuth: '15',
          deep: 1
        },
        children: [{
            path: '/intelligence/system/search',
            name: 'search',
            meta: {
              title: '情报查询',
              auth: '16',
              icon: 'e-aside-none',
              parentAuth: '1009',
              rootAuth: '15',
              deep: 2
            },
            component: () => import('@/views/intelligence/search')
          },
          {
            path: '/intelligence/system/agent',
            name: 'agent',
            meta: {
              title: '情报聚合',
              auth: '24',
              icon: 'e-aside-none',
              parentAuth: '1009',
              rootAuth: '15',
              deep: 2
            },
            component: () => import('@/views/intelligence/agent')
          },
          {
            path: '/intelligence/system/share',
            name: 'share',
            meta: {
              title: '情报共享',
              auth: '29',
              icon: 'e-aside-none',
              parentAuth: '1009',
              rootAuth: '15',
              deep: 2
            },
            component: () => import('@/views/intelligence/share')
          },
          {
            path: '/intelligence/system/management',
            name: 'management',
            meta: {
              title: '情报源管理',
              auth: '46',
              icon: 'e-aside-none',
              parentAuth: '1009',
              rootAuth: '15',
              deep: 2
            },
            component: () => import('@/views/intelligence/management')
          },
          {
            path: '/intelligence/system/apt',
            name: 'apt',
            meta: {
              title: 'APT武器库',
              auth: '50',
              icon: 'e-aside-none',
              parentAuth: '1009',
              rootAuth: '15',
              deep: 2
            },
            component: () => import('@/views/intelligence/apt')
          }
        ]
      },
      {
        path: '/intelligence/made',
        name: 'intelligence/made',
        meta: {
          title: '定制',
          auth: '1010',
          icon: 'e-aside-risks',
          parentAuth: '15',
          rootAuth: '15',
          deep: 1
        },
        children: [{
            path: '/intelligence/made/special',
            name: 'intelligence/special',
            meta: {
              title: '行业情报',
              auth: '186',
              icon: 'e-aside-none',
              parentAuth: '1010',
              rootAuth: '15',
              deep: 2
            },
            component: () => import('@/views/intelligence/special')
          },
          {
            path: '/intelligence/made/loophole',
            name: 'intelligence/loophole',
            meta: {
              title: '漏洞情报',
              auth: '187',
              icon: 'e-aside-none',
              parentAuth: '1010',
              rootAuth: '15',
              deep: 2
            },
            component: () => import('@/views/intelligence/loophole')
          },
        ]
      }
    ]
  },
  /*资产*/
  {
    path: '/assets',
    name: 'assets',
    meta: {
      title: '资产',
      icon: 'e-nav-handle',
      auth: '54'
    },
    component: Layout,
    children: [
      {
        path: '/assets/system',
        name: 'assets/system',
        meta: {
          title: '系统资产',
          auth: '1003',
          icon: 'e-aside-risks',
          parentAuth: '54',
          rootAuth: '54',
          deep: 1
        },
        children: [{
          path: '/assets/system/asset-management',
          name: 'asset-management',
          meta: {
            title: '资产管理',
            auth: '55',
            icon: 'e-aside-none',
            parentAuth: '1003',
            rootAuth: '54',
            deep: 2
          },
          component: () => import('@/views/assets/management')
        },
          {
            path: '/assets/system/asset-risky',
            name: 'asset-risky',
            meta: {
              title: '受影响资产',
              auth: '72',
              icon: 'e-aside-none',
              parentAuth: '1003',
              rootAuth: '54',
              deep: 2
            },
            component: () => import('@/views/assets/risky')
          },
        ]
      },
      {
        path: '/assets/made',
        name: 'assets/made',
        meta: {
          title: '定制',
          auth: '1004',
          icon: 'e-aside-risks',
          parentAuth: '54',
          rootAuth: '54',
          deep: 1
        },
        children: [{
          path: '/assets/made/vehicle',
          name: 'vehicle',
          meta: {
            title: '车辆资产',
            auth: '184',
            icon: 'e-aside-none',
            parentAuth: '1004',
            rootAuth: '54',
            deep: 2
          },
          component: () => import('@/views/assets/vehicle')
        },
          {
            path: '/assets/made/accessory',
            name: 'accessory',
            meta: {
              title: '零配件资产',
              auth: '185',
              icon: 'e-aside-none',
              parentAuth: '1004',
              rootAuth: '54',
              deep: 2
            },
            component: () => import('@/views/assets/accessory')
          }
        ]
      }
    ]
  },
  /*预警*/
  {
    path: '/alert',
    name: 'alert',
    meta: {
      title: '预警',
      icon: 'e-nav-handle',
      auth: '77'
    },
    component: Layout,
    children: [
      {
        path: '/alert/system',
        name: 'alert/system',
        meta: {
          title: '系统预警',
          auth: '1005',
          icon: 'e-aside-risks',
          parentAuth: '77',
          rootAuth: '77',
          deep: 1
        },
        children: [{
          path: '/alert/system/threaten',
          name: 'threaten',
          meta: {
            title: '威胁预警',
            auth: '78',
            icon: 'e-aside-none',
            parentAuth: '1005',
            rootAuth: '77',
            deep: 2
          },
          component: () => import('@/views/alert/index')
        },
          {
            path: '/alert/system/loophole',
            name: 'loophole',
            meta: {
              title: '漏洞预警',
              auth: '85',
              icon: 'e-aside-none',
              parentAuth: '1005',
              rootAuth: '77',
              deep: 2
            },
            component: () => import('@/views/alert/loophole')
          },
          {
            path: '/alert/system/darknet',
            name: 'darknet',
            meta: {
              title: '暗网预警',
              auth: '90',
              icon: 'e-aside-none',
              parentAuth: '1005',
              rootAuth: '77',
              deep: 2
            },
            component: () => import('@/views/alert/darknet')
          }
        ]
      },
      {
        path: '/alert/vehiclealert',
        name: 'vehiclealert',
        meta: {
          title: '定制',
          auth: '205',
          icon: 'e-aside-assets',
          parentAuth: '77',
          rootAuth: '77',
          deep: 1
        },
        component: () => import('@/views/alert/vehiclealert')
      },
    ]
  },
  /*报表*/
  {
    path: '/report',
    name: 'report',
    meta: {
      title: '报表',
      icon: 'e-nav-report',
      auth: '127'
    },
    component: Layout,
    children: [{
      path: '/report/create',
      name: 'create',
      meta: {
        title: '报表生成',
        auth: '128',
        icon: 'e-aside-report',
        parentAuth: '127',
        rootAuth: '127',
        deep: 1
      },
      component: () => import('@/views/report/creat')
    },
      {
        path: '/report/send',
        name: 'send',
        meta: {
          title: '报表发送',
          auth: '129',
          icon: 'e-aside-report',
          parentAuth: '127',
          rootAuth: '127',
          deep: 1
        },
        component: () => import('@/views/report/send')
      }]
  },
  /*配置*/
  {
    path: '/seting',
    name: 'seting',
    meta: {
      title: '配置',
      icon: 'e-nav-handle',
      auth: '93'
    },
    component: Layout,
    children: [
      {
        path: '/seting/system',
        name: 'seting/system',
        meta: {
          title: '系统配置',
          auth: '1007',
          icon: 'e-aside-setting',
          parentAuth: '93',
          rootAuth: '93',
          deep: 1
        },
        children: [{
            path: '/seting/system/network',
            name: 'network',
            meta: {
              title: '网络配置',
              auth: '94',
              icon: 'e-aside-none',
              parentAuth: '1007',
              rootAuth: '93',
              deep: 2
            },
            component: () => import('@/views/seting/network')
          },
          {
            path: '/seting/system/systemnotice',
            name: 'systemnotice',
            meta: {
              title: '威胁通知',
              auth: '97',
              icon: 'e-aside-none',
              parentAuth: '1007',
              rootAuth: '93',
              deep: 2
            },
            component: () => import('@/views/seting/notice')
          },
          {
            path: '/seting/system/loopholeCorrelation',
            name: 'loopholeCorrelation',
            meta: {
              title: '漏洞关联',
              auth: '104',
              icon: 'e-aside-none',
              parentAuth: '1007',
              rootAuth: '93',
              deep: 2
            },
            component: () => import('@/views/seting/loopholeCorrelation')
          },
          {
            path: '/seting/system/centralmanager',
            name: 'centralmanager',
            meta: {
              title: '集中管理',
              auth: '130',
              icon: 'e-aside-none',
              parentAuth: '1007',
              rootAuth: '93',
              deep: 2
            },
            component: () => import('@/views/seting/centralizedManagement')
          },
          {
            path: '/seting/system/user',
            name: 'user',
            meta: {
              title: '账号管理',
              auth: '110',
              icon: 'e-aside-none',
              parentAuth: '1007',
              rootAuth: '93',
              deep: 2
            },
            component: () => import('@/views/seting/user')
          },
          {
            path: '/seting/system/log',
            name: 'log',
            meta: {
              title: '审计日志',
              auth: '126',
              icon: 'e-aside-none',
              parentAuth: '1007',
              rootAuth: '93',
              deep: 2
            },
            component: () => import('@/views/seting/log')
          },
          {
            path: '/seting/system/syslog',
            name: 'syslog',
            meta: {
              title: 'SYSLOG配置',
              auth: '229',
              icon: 'e-aside-none',
              parentAuth: '1007',
              rootAuth: '93',
              deep: 2
            },
            component: () => import('@/views/seting/syslog'),
          },
          {
            path: '/seting/system/api',
            name: 'api',
            meta: {
              title: '情报API',
              auth: '151',
              icon: 'e-aside-none',
              parentAuth: '1007',
              rootAuth: '93',
              deep: 2
            },
            component: () => import('@/views/seting/api')
          },
          {
            path: '/seting/system/offline',
            name: 'offline',
            meta: {
              title: '离线更新',
              auth: '236',
              icon: 'e-aside-none',
              parentAuth: '1007',
              rootAuth: '93',
              deep: 2
            },
            component: () => import('@/views/seting/offline')
          },
          {
            path: '/seting/system/licence',
            name: 'licence',
            meta: {
              title: '许可证',
              auth: '224',
              icon: 'e-aside-none',
              parentAuth: '1007',
              rootAuth: '93',
              deep: 2
            },
            component: () => import('@/views/seting/licence')
          }
        ]
      },
      {
        path: '/seting/made',
        name: 'seting/made',
        meta: {
          title: '定制',
          auth: '1008',
          icon: 'e-aside-setting',
          parentAuth: '93',
          rootAuth: '93',
          deep: 1
        },
        children: [
          {
            path: '/seting/made/labelManage',
            name: 'labelManage',
            meta: {
              title: '标签管理',
              auth: '181',
              icon: 'e-aside-none',
              parentAuth: '1008',
              rootAuth: '93',
              deep: 2
            },
            component: () => import('@/views/seting/labelManage')
          },
          {
            path: '/seting/made/specialIntelligence',
            name: 'specialIntelligence',
            meta: {
              title: '行业情报管理',
              auth: '182',
              icon: 'e-aside-none',
              parentAuth: '1008',
              rootAuth: '93',
              deep: 2
            },
            component: () => import('@/views/seting/specialIntelligence'),
          },
          {
            path: '/seting/made/loopholeIntelligence',
            name: 'loopholeIntelligence',
            meta: {
              title: '漏洞情报管理',
              auth: '183',
              icon: 'e-aside-none',
              parentAuth: '1008',
              rootAuth: '93',
              deep: 2
            },
            component: () => import('@/views/seting/loopholeIntelligence'),
          },
          {
            path: '/seting/made/baseIntelligence',
            name: 'baseIntelligence',
            meta: {
              title: '基础情报管理',
              auth: '209',
              icon: 'e-aside-none',
              parentAuth: '1008',
              rootAuth: '93',
              deep: 2
            },
            component: () => import('@/views/seting/baseIntelligence'),
          }
        ]
      }
    ]
  }
];

export default new VueRouter({
  mode: "history", //去掉url中的#
  // 解决vue框架页面跳转有白色不可追踪色块的bug
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes: defaultRouter
})
export { defaultRouter, asyncRouter }
