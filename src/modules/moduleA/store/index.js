import isDevelopment from '@/helpers/isDevelopment';

import getMockData from './mock.json';
import getUsers from './api';

export default {
  state: {
    list: [],
  },
  getters: {
    getList: (state) => state.list,
  },
  mutations: {
    addToList(state, item) {
      state.list = item;
    },
  },
  actions: {
    // eslint-disable-next-line no-unused-vars

    async getData({ commit }) {
      const apiUrl = isDevelopment ? getMockData : getUsers();
      try {
        const users = await apiUrl;
        commit('addToList', users);
      } catch (e) {
        console.log(e);
      }
    },
  },

  namespaced: true,
};
