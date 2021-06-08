<template>
  <div class="card">
    <div class="image">
      <img
        :src="currentItem.img"
        alt=""
      >
    </div>
    <div class="body">
      <div class="title">
        {{ currentItem.title }}
      </div>
      {{ currentItem.description }}
    </div>
  </div>
</template>

<script>

export default {
  props: {
    namespace: {
      type: String,
      required: true,
      validator: (value) => ['moduleB', 'moduleC'].includes(value),
    },
  },

  computed: {
    currentItem() {
      return this.$store.getters[`${this.namespace}/getCardItem`];
    },
  },

};
</script>

<style scoped>
  .card {
    background-color: #20114a;
    display: inline-block;
    width: 400px;
    text-align: center;
    margin: 40px;
    border: 1px solid #100432;
    box-shadow: 2px 2px 4px #3f51b5;
  }

  .body {
    padding: 40px;
  }

  .title {
    font-weight: bold;
  }
</style>
