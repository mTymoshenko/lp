import CHANGE_THEME from './types';

export default {
  [CHANGE_THEME](state, payload) {
    state.theme = payload;
  },
};
