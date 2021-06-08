<template>
  <div>
    <h1>Module A</h1>
    List:
    <ul>
      <li
        v-for="item in getList"
        :key="item.id"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: mapGetters('moduleA', ['getList']),

  async created() {
    await this.getData();
  },

  methods: mapActions('moduleA', ['getData']),

};
</script>
