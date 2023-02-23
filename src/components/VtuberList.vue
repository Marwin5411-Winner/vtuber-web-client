<template>
  <div class="vtuber-list">
    <!-- //Create grid of vtuber images here if device is not mobile use 4 columns if
    mobile use 2 columns -->
    <div class="row">
      <VtuberCard v-for="vtuber in vtubers.result" :key="vtuber.id" :vtuber="vtuber" />
    </div>
  </div>
</template>
<script>
import VtuberCard from "./VtuberCard.vue";

export default {
  name: "VtuberList",
  data() {
    return {
    };
  },
  components: {
    VtuberCard,
  },
  methods: {
  },
  props : {
    vtubers: {
      type: Object
    },
  },
};
</script>
<style scoped>


.vtuber-list {
  width: 100%;
  height: 100%;
  /* background-color: #000; */
  color: #fff;
}

.row {
    --bs-gutter-x: 0;
}
</style>
