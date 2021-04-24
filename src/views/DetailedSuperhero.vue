<template>
  <div>
    <h1>{{ $route.params.name }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'DetailedSuperhero',
})

</script>

<style>

</style>
