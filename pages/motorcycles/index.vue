<template>
  <div class="min-h-screen">
		<main class="max-w-5xl px-5 mx-auto pt-7 lg:px-0">
  <button
      v-if="currentUser.type === 'seller'"
      @click="motorcycleModal.openModal()"
      class="w-full text-white py-3.5 md:py-2.5 md:w-auto btn shrink-0">
    Add Motorcycle
  </button>
      <h3 v-if="currentUser.type === 'seller' && motorcycleStore.getMotorcycleByEmail(currentUser.email).length === 0">You can start by listing your motorcycle here</h3>
      <div class="container">
        <product-card v-if="currentUser.type === 'buyer'" v-for="motorcycle in motorcycleStore.motorcycles" :motorcycle="motorcycle" />
        <product-card v-else v-for="motorcycle in motorcycleStore.getMotorcycleByEmail(currentUser.email)" :motorcycle="motorcycle" />
      </div>
  </main>
  
  <MotorcycleModal ref="motorcycleModal" />
</div>
</template>

<script setup lang="ts">
import {useUserStore} from "~/composables/userStore";

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

const userStore = useUserStore();
const currentUser = await userStore.getByEmail(user.value.email)


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