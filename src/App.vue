<script setup>
import NavBar from "./components/NavBar.vue";
import ProductList from "./components/ProductList.vue";
import MotorcycleDetails from "./components/MotorcycleDetails.vue"

</script>

<template>
  <header>
    <nav-bar />
  </header>
  <product-list />
  <motorcycle-details />
</template>

<style scoped>
body {
  min-height: 75rem;
}

</style>
