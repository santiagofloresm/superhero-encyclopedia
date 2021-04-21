<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <SuperheroHomeCard :id=1></SuperheroHomeCard>
      </v-col>
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
  data: () => ({

  }),
  created() {
    this.$store.dispatch('getAllSuperheros')
  },
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
