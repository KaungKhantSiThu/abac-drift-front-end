


<template>
  <div class="container">
    <product-card v-for="motorcycle in motorcycleStore.motorcycles" :motorcycle="motorcycle"/>
  </div>
</template>

<script setup lang="ts">
import ProductCard from "~/components/ProductCard.vue";
import {useMotorcycleStore} from "~/composables/motorcycleStore";

definePageMeta({
  middleware: ['auth']
})



const motorcycleStore = useMotorcycleStore();

useAsyncData(async () => await motorcycleStore.getAll(), {
  initialCache: false,
});

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