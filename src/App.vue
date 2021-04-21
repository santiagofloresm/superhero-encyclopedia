<template>
  <v-app>
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
          v-model="searchValue"
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
    <v-main>
      <Home/>
    </v-main>
    <v-bottom-navigation
      app
      background-color="primary"
      dark
      absolute
      height="80"
    >
      <p>Site under construction<br>
      Created by Santiago Flores<br>
      Email: santiagofloresmeza@gmail.com</p>
    </v-bottom-navigation>
    <v-responsive height="350"></v-responsive>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Home from './views/Home.vue'

export default Vue.extend({
  name: 'App',

  components: {
    Home
  },

  data: () => ({
    searchValue: ''
  }),
});
</script>

<style>
#app {
  background: url('./assets/Images/comics-background.jpg') no-repeat center fixed;
  background-size: cover;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.3);
}

.search-bar label {
  font-size: 20px;
}

.search-bar input {
  font-size: 20px;
}
</style>
