<template>
  <div class="container">
    <ProductCard v-for="car in cars" :car="car"/>
  </div>

</template>

<script setup>
import ProductCard from './ProductCard.vue';
import {ref} from "vue";

const cars = ref([
  {
    title: "Toyota Hilux",
    price: 256000,
    gear: "auto",
    mileage: 1200,
    engine: 1200,
    year: 2019,
    manufacturer: "Toyota",
    imageURL: "src/assets/cars/car_one.jpg"
  },
  {
    title: "Mercedes-Benz",
    price: 979000,
    gear: "auto",
    mileage: 5000,
    engine: 1500,
    year: 2013,
    manufacturer: "Mercedez",
    imageURL: "src/assets/cars/car_two.jpg"
  },
  {
    title: "Toyota Hilux",
    price: 256000,
    gear: "auto",
    mileage: 1200,
    engine: 1200,
    year: 2019,
    manufacturer: "Toyota",
    imageURL: "src/assets/cars/car_one.jpg"
  },
  {
    title: "Mercedes-Benz",
    price: 979000,
    gear: "auto",
    mileage: 5000,
    engine: 1500,
    year: 2013,
    manufacturer: "Mercedez",
    imageURL: "src/assets/cars/car_two.jpg"
  },
])
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
}
</style>