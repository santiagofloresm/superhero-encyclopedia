<template>
  <v-app>
    <top-bar></top-bar>
    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
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
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import TopBar from './components/Navigation/TopBar'

export default Vue.extend({
  name: 'App',
  components: {
    TopBar
  },
  created() {
    this.$store.dispatch('getAllSuperheros')
  },
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
