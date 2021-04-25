<template>
  <span class="superhero-stats">{{ name }}
    <v-progress-linear
        :color="color"
        height="13"
        :value="value"
        ></v-progress-linear>
  </span>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'StatsProgressBar',
  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    },
    color: {
      type: String,
      required: true,
    }
  }
})
</script>

<style>
.superhero-stats {
  font-size: 27px;
  font-weight: bold;
  color: white;
}
</style>
