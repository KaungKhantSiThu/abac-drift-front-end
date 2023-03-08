<template>
  <v-card
      class="mx-auto"
      max-width="400"
  >
    <v-img
        class="align-end text-white"
        height="200"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        cover
    >
    </v-img>
    <v-card-title class="pt-4">{{title}}</v-card-title>

    <v-card-subtitle class="pt-4">
      {{ subTitle }}
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    title: {
      type: String,
      default: "Title",
    },
    subTitle: {
      type: String,
      default: "Subtitle",
    },
  }
}
</script>

<style scoped>

</style>