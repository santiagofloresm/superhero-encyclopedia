<template>
  <div>
    <h1>{{ superhero.name }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'DetailedSuperhero',
  props: {
    superhero: {
      type: Object,
      required: true
    }
  }
})

</script>

<style>

</style>
