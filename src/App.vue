<script setup>
import NavBar from "./components/NavBar.vue";
import ProductList from "./components/ProductList.vue";

</script>

<template>
  <header>
    <nav-bar />
  </header>
  <div class="container">
    <product-list />
  </div>
</template>

<style scoped>
body {
  min-height: 75rem;
}

</style>
