<template>
  <div class="min-h-screen">
		<main class="max-w-5xl px-5 mx-auto pt-7 lg:px-0">
  <button @click="motorcycleModal.openModal()" class="w-full py-3.5 md:py-2.5 md:w-auto btn shrink-0">
    Add Motorcycle
  </button>
  <div class="container">
    <product-card v-for="motorcycle in motorcycleStore.motorcycles" :motorcycle="motorcycle" />
  </div>

  <ClientOnly>
  <template #item-actions="book">
    <div class="flex space-x-4 text-gray-500">
      <button @click="motorcycleModal.openModal()">
        <Icon size="18" name="fluent:pen-24-regular" />
      </button>
      <button @click="removeMotorcycle(motorcycle)">
        <Icon size="18" name="fluent:delete-24-regular" />
      </button>
    </div>
    </template>
    </ClientOnly>
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
const removeMotorcycle = async (motorcycle) => {
  await motorcycleStore.remove(motorcycle._id);
};

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