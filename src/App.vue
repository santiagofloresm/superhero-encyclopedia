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
  }),
});
</script>

<style>
#app {
  background: url('./assets/Images/comics-background.jpg') no-repeat center fixed;
  background-size: cover;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.3);
}
</style>
