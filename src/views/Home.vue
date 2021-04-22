<template>
  <v-container fluid>
      <v-row class="home-cards text-center">
        <SuperheroHomeCard v-for="id in getIdNumber()" :key="id" :superhero="getSuperhero(id)"></SuperheroHomeCard>
      </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import SuperheroHomeCard from "@/components/UI/SuperheroHomeCard.vue";

export default Vue.extend({
  name: 'Home',
  components: {
    SuperheroHomeCard,
  },
  data: () => ({}),
  created() {
    this.$store.dispatch('getAllSuperheros')
  },
  methods: {
    getIdNumber() {
      return [1, 2, 3, 4, 5, 6]
    },
    getSuperhero(id: number) {
      return this.$store.getters.getSuperhero(id);
    }
  }
})
</script>

<style>
.home-cards {
  justify-content: space-around;
}
</style>
