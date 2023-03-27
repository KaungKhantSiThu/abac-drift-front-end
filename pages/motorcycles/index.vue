<template>
  <div class="min-h-screen">
		<main class="max-w-5xl px-5 mx-auto pt-7 lg:px-0">
  <button
      v-if="user.user_metadata.type === 'seller'"
      @click="motorcycleModal.openModal()"
      class="w-full py-3.5 md:py-2.5 md:w-auto btn shrink-0">
    Add Motorcycle
  </button>
      <h3 v-if="user.user_metadata.type === 'seller' && motorcycleStore.getMotorcycleByEmail(user.email) === undefined || motorcycleStore.getMotorcycleByEmail(user.email).length === 0">You can start by listing your motorcycle here</h3>
      <div class="container">
    <product-card v-if="user.user_metadata.type === 'buyer'" v-for="motorcycle in motorcycleStore.motorcycles" :motorcycle="motorcycle" />
    <product-card v-if="user.user_metadata.type === 'seller'" v-for="motorcycle in motorcycleStore.getMotorcycleByEmail(user.email)" :motorcycle="motorcycle" />
  </div>
  </main>
  
  <MotorcycleModal ref="motorcycleModal" />
</div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['auth']
})

import ProductCard from "~/components/ProductCard.vue";
import { useMotorcycleStore } from "~/composables/motorcycleStore";

const motorcycleStore = useMotorcycleStore();

useAsyncData(async () => await motorcycleStore.getAll(), {
  initialCache: false,
});

const motorcycleModal = ref();

const user = useSupabaseUser();

onMounted(() => {
  watchEffect(() => {
    if (!user.value)  {
      navigateTo('/login')
    }
  })
})


</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>