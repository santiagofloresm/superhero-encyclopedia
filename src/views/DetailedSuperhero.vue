<template>
  <v-container class="detailed-container">
    <v-layout>
      <v-flex>
        <v-row class="top-row">
          <v-col md="4">
            <v-img
                class="align-start"
                :src="superhero.images.lg"
                contain
                max-height="400"></v-img>
          </v-col>
          <v-col md="8">
            <p class="superhero-top-name">{{ superhero.name }}</p>
<!--            <StatsProgressBar v-for="stat in stats" :key="stat.name" :name="stat.name" :value="stat.value" :color="stat.color"></StatsProgressBar>-->
              <StatsProgressBar name="Intelligence" :value="superhero.powerstats.intelligence" color="blue"></StatsProgressBar>
              <StatsProgressBar name="Strength" :value="superhero.powerstats.strength" color="red"></StatsProgressBar>
              <StatsProgressBar name="Speed" :value="superhero.powerstats.speed" color="purple"></StatsProgressBar>
              <StatsProgressBar name="Durability" :value="superhero.powerstats.durability" color="orange"></StatsProgressBar>
              <StatsProgressBar name="Power" :value="superhero.powerstats.power" color="green"></StatsProgressBar>
              <StatsProgressBar name="Combat" :value="superhero.powerstats.combat" color="pink"></StatsProgressBar>
          </v-col>
        </v-row>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import StatsProgressBar from "@/components/UI/StatsProgressBar.vue";
import {mapGetters} from "vuex";

export default Vue.extend({
  name: 'DetailedSuperhero',
  components: {
    StatsProgressBar,
  },
  // data: () => ({
  //   stats: [{
  //     name: 'Intelligence',
  //     value: this.superhero.powerstats.intelligence,
  //     color: "blue"
  //   }]
  // }),
  computed: {
    ...mapGetters(['getSuperheroByName']),
    superhero: {
      get: function () {
        return this.getSuperheroByName(this.$route.params.name)
      }
    }
  }
})

</script>

<style>
.top-row {
  padding-top: 0.1%;
}

.superhero-top-name {
  font-size: 50px;
  font-weight: bolder;
  color: white;
  margin: 0 !important;
}

.detailed-container {
  margin-top: 1%;
  margin-bottom: 1%;
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
