<template>
  <v-hover v-slot="{ hover }">
  <v-card
      :elevation="hover ? 22 : 1" width="200"
      @click="$router.push({ name: 'Detailed', params: { superhero: superhero, name: superhero.name.replaceAll(' ', '-').toLowerCase(), title: superhero.name} })">
    <v-img class="align-end" :src="superhero.images.md">
      <p class="superhero-name" v-text="superhero.name"></p>
    </v-img>
  </v-card>
  </v-hover>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SuperheroHomeCard',
  props: {
    superhero: {
      type: Object,
      required: true
    }
  },
})
</script>

<style>
.superhero-name {
  justify-content: center;
  font-size: 25px;
  font-weight: bolder;
  background-color: black;
  color: white;
  display: inline-block;
}
</style>
