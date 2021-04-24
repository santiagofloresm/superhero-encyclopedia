<template>
  <div>
    <h1>{{ superhero }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {mapGetters} from "vuex";

export default Vue.extend({
  name: 'DetailedSuperhero',
  computed: {
    ...mapGetters(['getSuperheroByName']),
    superhero: {
      get: function() {
        console.log(this.$route.params.name)
        return this.getSuperheroByName(this.$route.params.name)
      }
    }
  }
})

</script>

<style>

</style>
