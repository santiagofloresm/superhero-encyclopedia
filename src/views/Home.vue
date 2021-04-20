<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Site under construction
        </h1>
        <p class="subheading font-weight-regular">
          Developed by Santiago Flores <br> Email: santiagofloresmeza@gmail.com
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Home',
  data: () => ({

  }),
  created() {
    this.$store.dispatch('getAllSuperheros')
  }
})
</script>

<style>
h1 {
  color: white;
}

p {
  color: white;
}
</style>
