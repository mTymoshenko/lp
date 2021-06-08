import Vue from 'vue';
import Vuex from 'vuex';

import moduleAStore from '@/modules/moduleA/store';
import moduleBStore from '@/modules/moduleB/store';
import moduleCStore from '@/modules/moduleC/store';
import settings from './settings';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    moduleA: moduleAStore,
    moduleB: moduleBStore,
    moduleC: moduleCStore,
    settings,
  },
});
