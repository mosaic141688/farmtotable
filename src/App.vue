<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="require('./assets/logo_transparent_background.webp')"
          transition="scale-transition"
          width="100"
        />
Farm To Table v1.0.0
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Login</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <products/>
    </v-content>
  </v-app>
</template>

<script>
import products from './components/products'
export default {
  name: 'App',

  components: {
    products
  },

  data: () => ({
    //
  }),
};
</script>
