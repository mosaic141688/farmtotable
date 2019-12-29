<template>
  <v-card class="mx-auto product" max-width="344">
    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

    <v-card-title>Sisi's Free Range Eggs</v-card-title>

    <v-card-subtitle>L20.00</v-card-subtitle>

    <v-card-actions>
      <v-btn text>Add to box</v-btn>

      <v-btn color="purple" text>Explore</v-btn>

      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text>The happiest little laying hens who spend at least 8 hours a day roaming around their fenceless garden. The only nutritional supplements they receive are the occasional vitamins in their water and laying mash at night, given to laying hens to provide them with key nutrients needed for egg production such as protein and calcium. Otherwise these happy guys do all the foraging themselves!</v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    show: false
  })
};
</script>

<style>
.product {
  margin-top: 10px;
}
</style>