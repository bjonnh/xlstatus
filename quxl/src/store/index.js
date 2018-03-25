import Vue from 'vue'
import Vuex from 'vuex'

import servers from './servers'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    servers
  }
})

export default store
