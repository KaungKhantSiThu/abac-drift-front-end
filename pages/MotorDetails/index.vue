<template>
  <div>
    <MotorcycleDetails v-for="motorcycle in motorcycleStore.motorcycles" :motorcycle="motorcycle"/>
  </div>
  </template>
  
  <script setup lang="ts">
  import MotorcycleDetails from "~/components/MotorcycleDetails.vue";
  import {useMotorcycleStore} from "~/composables/motorcycleStore";
  
  const motorcycleStore = useMotorcycleStore();
  
  useAsyncData(async () => await motorcycleStore.getAll(), {
    initialCache: false,
  });
  
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  </style>