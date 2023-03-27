<template>
  <div>
    <AppointmentCard v-for="appointment in appointmentStore.appointments" :event="appointment"/>
  </div>

</template>

<script setup>

definePageMeta({
  middleware: ['auth']
})

const user = useSupabaseUser();
onMounted(() => {
  watchEffect(() => {
    if (!user.value)  {
      navigateTo('/login')
    }
  })
})

import AppointmentCard from "~/components/AppointmentCard.vue";
import {useAppointmentStore} from "~/composables/appointmentStore";

const appointmentStore = useAppointmentStore();

useAsyncData(async () => await appointmentStore.getAll(), {
  initialCache: false,
});
</script>

<style scoped>

</style>