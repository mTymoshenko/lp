<template>
  <div>
    <h1>Module D</h1>
    <Card namespace="moduleC" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {

  created() {
    this.changeTheme('light');
  },

  beforeDestroy() {
    this.changeTheme('dark');
  },

  methods: mapActions('settings', ['changeTheme']),

};
</script>
