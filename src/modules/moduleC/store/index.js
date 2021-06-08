export default {
  state: {
    card: {
      title: 'module C card name',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      img: 'https://picsum.photos/400/200',
    },
  },
  getters: {
    getCardItem: (state) => state.card,
  },
  mutations: {
  },
  actions: {
  },
  namespaced: true,
};
