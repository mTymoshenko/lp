<template>
  <div
    class="page"
    :class="getCurrentTheme"
  >
    <Banner />
    <navigation />

    <div class="padding">
      <slot />
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import Banner from '@/components/Banner.vue';

import { mapGetters } from 'vuex';

export default {
  components: {
    Navigation,
    Banner,

  },

  computed: mapGetters('settings', ['getCurrentTheme']),
};
</script>

<style scoped>
.padding {
  padding: 10px;
}

.page {
  background-image: var(--background-image);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-color: var(--background-color);
  color: white;
}

.light {
  --background-color: white;
  --background-image: none;
  --main-color: #222;
}

.dark {
  --background-color: #222;
  --background-image: radial-gradient(circle at 97% 5%, #d7ab6d,
    #743e9b 13%, #3d2066 26%, #100432 42%);
  --main-color: #fff;
}
</style>
