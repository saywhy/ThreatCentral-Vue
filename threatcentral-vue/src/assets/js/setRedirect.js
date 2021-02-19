
export function setRedirect(per) {

  let redirect = '/404';
  //首页
  if (per.includes('1')) {
    if(per.includes('2')){
      redirect = '/home/overview';
    }
  //情报
  }else if(per.includes('13')){
    if(per.includes('1009')){
      if(per.includes('16')){
        redirect = '/intelligence/system/search';
      }else if(per.includes('24')){
        redirect = '/intelligence/system/agent';
      }else if(per.includes('29')){
        redirect = '/intelligence/system/share';
      }else if(per.includes('46')){
        redirect = '/intelligence/system/management';
      }else if(per.includes('50')){
        redirect = '/intelligence/system/apt';
      }
    }else if(per.includes('1010')){
      if(per.includes('186')){
        redirect = '/intelligence/made/special';
      }else if(per.includes('187')){
        redirect = '/intelligence/made/loophole';
      }
    }
  //资产
  }else if(per.includes('54')){
    if(per.includes('1003')){
      if(per.includes('55')){
        redirect = '/assets/system/asset-management';
      }else if(per.includes('72')){
        redirect = '/assets/system/asset-risky';
      }
    }else if(per.includes('1004')){
      if(per.includes('184')){
        redirect = '/assets/made/vehicle';
      }else if(per.includes('185')){
        redirect = '/assets/made/accessory';
      }
    }
  //预警
  }else if(per.includes('77')){
    if(per.includes('1005')){
      if(per.includes('78')){
        redirect = '/alert/system/threaten';
      }else if(per.includes('85')){
        redirect = '/alert/system/loophole';
      }else if(per.includes('90')){
        redirect = '/alert/system/darknet';
      }
    }else if(per.includes('205')){
      /*if(per.includes('184')){
        redirect = '/assets/made/vehicle';
      }*/
    }
  //报表
  }else if(per.includes('127')){
    if(per.includes('128')){
      redirect = '/report/create';
    }else if(per.includes('129')){
      redirect = '/report/send';
    }
  //配置
  }else if(per.includes('93')){
    if(per.includes('1007')){
      if(per.includes('94')){
        redirect = '/seting/system/network';
      }else if(per.includes('97')){
        redirect = '/seting/system/systemnotice';
      }else if(per.includes('104')){
        redirect = '/seting/system/loopholeCorrelation';
      }else if(per.includes('130')){
        redirect = '/seting/system/centralmanager';
      }else if(per.includes('110')){
        redirect = '/seting/system/user';
      }else if(per.includes('126')){
        redirect = '/seting/system/log';
      }else if(per.includes('229')){
        redirect = '/seting/system/syslog';
      }else if(per.includes('151')){
        redirect = '/seting/system/api';
      }else if(per.includes('236')){
        redirect = '/seting/system/offline';
      }else if(per.includes('224')){
        redirect = '/seting/system/licence';
      }
    }else if(per.includes('1008')){
      if(per.includes('181')){
        redirect = '/seting/made/labelManage';
      }else if(per.includes('182')){
        redirect = '/seting/made/specialIntelligence';
      }else if(per.includes('183')){
        redirect = '/seting/made/loopholeIntelligence';
      }else if(per.includes('209')){
        redirect = '/seting/made/baseIntelligence';
      }
    }
  }
  return redirect;
}
