<template>
  <v-card>
    <v-app-bar
        app
        color="primary"
        dark
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <router-link to="/">
        <v-img
            :src="require('@/assets/Images/logo.png')"
            alt="Logo"
            min-width="100"
            width="250"
        />
      </router-link>
      <v-spacer></v-spacer>
      <v-text-field
          v-model="searchName"
          append-icon="mdi-magnify"
          class="shrink search-bar"
          clearable
          hide-details
          label="Search for a superhero"></v-text-field>
      <v-spacer></v-spacer>

    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        color="primary"
        app>
      <v-list>
        <v-list-item-group>
          <v-list-item class="my-3">
            <v-list-item-title>
              <router-link style="text-decoration: none; color: inherit;" to="/">
              <h2>Home</h2>
              </router-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <router-link style="text-decoration: none; color: inherit;" to="/about">
              <h2>About</h2>
              </router-link>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <template v-slot:append>
        <div>
      <v-btn
          href="https://github.com/santiagofloresm/superhero-encyclopedia"
          target="_blank"
          text
          block
      >
        <h2>Repository</h2>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TopBar',
  data() {
    return {
      drawer: false,
    }
  },
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
