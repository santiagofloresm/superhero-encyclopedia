<template>
  <v-card height="200" width="200">
    <v-flex>
      <v-row>
        <v-col sm="12">
          <p>{{ superhero.name }}</p>
        </v-col>
      </v-row>
    </v-flex>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SuperheroHomeCard',
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data: () => ({

  }),
  computed: {
    superhero(): [] {
      if (this.$store.getters.getSuperhero(this.id) !== undefined) {
        return this.$store.getters.getSuperhero(this.id);
      }
      return [];
    }
  }
})
</script>

<style>

</style>
