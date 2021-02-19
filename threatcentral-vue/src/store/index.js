import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

import layout from './layout/index';


const store = new Vuex.Store({
  modules:{
    layout,
  },
  //strict: debug, //是否开启严格模式
})

export default store;
