export default {
  state: {
    card: {
      title: 'Card Title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      img: 'https://via.placeholder.com/400x200',
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
