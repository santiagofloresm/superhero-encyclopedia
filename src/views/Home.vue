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
import {mapGetters} from "vuex";

export default Vue.extend({
  name: 'Home',
  components: {
    SuperheroHomeCard,
  },
  data: () => ({}),
  computed: {
    ...mapGetters(['filterSuperheros', 'getSearchValue']),
    superheros: {
      get: function() {
        return this.filterSuperheros(this.getSearchValue);
      }
    }
  }
})
</script>

<style>
.home-cards {
  justify-content: space-around;
  padding-top: 8%;
  padding-bottom: 8%;
}
</style>
