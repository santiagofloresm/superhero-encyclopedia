import Vue from 'vue'
import Vuex from 'vuex'
import superheros from './Modules/superheros.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    superheros
  }
})
