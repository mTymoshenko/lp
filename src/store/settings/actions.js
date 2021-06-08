import CHANGE_THEME from './types';

export default {
  changeTheme({ commit }, payload) {
    commit(CHANGE_THEME, payload);
  },
};
