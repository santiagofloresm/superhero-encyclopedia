import Vue from 'vue'
import Vuex, {StoreOptions} from 'vuex'
import {RootState} from "@/store/types";
import { superheros } from "@/store/superheros";

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0'
  },
  modules: {
    superheros,
  }
}

export default new Vuex.Store<RootState>(store);
