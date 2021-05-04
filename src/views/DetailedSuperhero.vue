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
            <StatsProgressBar name="Intelligence" :value="superhero.powerstats.intelligence" color="indigo accent-4"></StatsProgressBar>
            <StatsProgressBar name="Strength" :value="superhero.powerstats.strength" color="red accent-4"></StatsProgressBar>
            <StatsProgressBar name="Speed" :value="superhero.powerstats.speed" color="amber accent-3"></StatsProgressBar>
            <StatsProgressBar name="Durability" :value="superhero.powerstats.durability" color="purple accent-4"></StatsProgressBar>
            <StatsProgressBar name="Power" :value="superhero.powerstats.power" color="green accent-4"></StatsProgressBar>
            <StatsProgressBar name="Combat" :value="superhero.powerstats.combat" color="orange accent-4"></StatsProgressBar>
          </v-col>
        </v-row>
        <v-row>
          <v-spacer></v-spacer>
          <v-col md="5">
            <p class="superhero-info-title">Full Name:
              <span class="superhero-info-body">{{ superhero.biography.fullName }}</span>
            </p>
            <p class="superhero-info-title">Aliases:
              <span class="superhero-info-body" v-for="alias in superhero.biography.aliases" :key="alias">{{ alias }}, </span>
            </p>
            <p class="superhero-info-title">Alter egos:
              <span class="superhero-info-body">{{ superhero.biography.alterEgos }}</span>
            </p>
            <p class="superhero-info-title">Group affiliation:
              <span class="superhero-info-body">{{ superhero.connections.groupAffiliation }}</span>
            </p>
            <p class="superhero-info-title">Relatives:
              <span class="superhero-info-body">{{ superhero.connections.relatives }}</span>
            </p>
            <p class="superhero-info-title">Publisher:
              <span class="superhero-info-body">{{ superhero.biography.publisher }}</span>
            </p>
            <p class="superhero-info-title">First appearance:
              <span class="superhero-info-body">{{ superhero.biography.firstAppearance }}</span>
            </p>
          </v-col>
          <v-col md="5">
            <p class="superhero-info-title">Race:
              <span class="superhero-info-body">{{ superhero.appearance.race }}</span>
            </p>
            <p class="superhero-info-title">Place of birth:
              <span class="superhero-info-body">{{ superhero.biography.placeOfBirth }}</span>
            </p>
            <p class="superhero-info-title">Gender:
              <span class="superhero-info-body">{{ superhero.appearance.gender }}</span>
            </p>
            <p class="superhero-info-title">Eye color:
              <span class="superhero-info-body">{{ superhero.appearance.eyeColor }}</span>
            </p>
            <p class="superhero-info-title">Hair color:
              <span class="superhero-info-body">{{ superhero.appearance.hairColor }}</span>
            </p>
            <p class="superhero-info-title">Height:
              <span class="superhero-info-body">{{ superhero.appearance.height[1] }}</span>
            </p>
            <p class="superhero-info-title">Weight:
              <span class="superhero-info-body">{{ superhero.appearance.weight[1] }}</span>
            </p>
            <p class="superhero-info-title">Occupation:
              <span class="superhero-info-body">{{ superhero.work.occupation }}</span>
            </p>
            <p class="superhero-info-title">Base:
              <span class="superhero-info-body">{{ superhero.work.base }}</span>
            </p>
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
  background-color: rgba(0, 0, 0, 0.9);
}

.superhero-info-title {
  font-size: 22px;
  color: #0da877;
  font-weight: bolder;
  margin: 0 !important;
}

.superhero-info-body {
  font-size: 20px;
  color: white;
  font-weight: bold;
}
</style>
