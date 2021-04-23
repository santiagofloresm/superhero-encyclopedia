<template>
  <v-app-bar
      app
      color="primary"
      dark
  >
    <div>
      <v-img
          alt="Logo"
          min-width="100"
          :src="require('@/assets/Images/logo.png')"
          width="250"
      />
    </div>
    <v-spacer></v-spacer>
    <v-text-field
        hide-details
        v-model="searchName"
        append-icon="mdi-magnify"
        clearable
        label="Search for a superhero"
        class="shrink search-bar"></v-text-field>
    <v-spacer></v-spacer>
    <v-btn
        href="https://github.com/santiagofloresm/superhero-encyclopedia"
        target="_blank"
        text
    >
      <span class="mr-2">Repository</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TopBar',
  computed: {
    searchName: {
      set: function (searchValue) {
        this.$store.dispatch('setSearchValue', searchValue)
      },
      get: function () {
        return this.$store.getters.searchValue;
      }
    }
  }
})
</script>
