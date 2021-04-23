<template>
  <v-container fluid>
    <div v-if="superheros.length !== 0">
      <v-row class="home-cards text-center">
        <SuperheroHomeCard v-for="superhero in superheros" :key="superhero.id" :superhero="superhero"></SuperheroHomeCard>
      </v-row>
    </div>
    <div v-else>Loading</div>
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
  props: {
    superheros: {
      type: Array,
      required: true
    }
  },
  data: () => ({}),
  // methods: {
  //   getSuperhero(id: number) {
  //     return this.$store.getters.getSuperhero(id);
  //   }
  // }
})
</script>

<style>
.home-cards {
  justify-content: space-around;
  padding-top: 3%;
  padding-bottom: 3%;
}
</style>
