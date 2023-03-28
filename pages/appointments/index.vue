<template>
  <div>
    <h3 v-if="appointmentStore.getAppointmentsByEmail(currentUser.email) === 0">You have no appointments</h3>
    <AppointmentCard v-if="appointmentStore.getAppointmentsByEmail(currentUser.email).length > 0" v-for="appointment in appointmentStore.getAppointmentsByEmail(currentUser.email)" :event="appointment"/>
  </div>

</template>

<script setup>

import {useUserStore} from "~/composables/userStore";
import AppointmentCard from "~/components/AppointmentCard.vue";
import {useAppointmentStore} from "~/composables/appointmentStore";

definePageMeta({
  middleware: ['auth']
})
const appointmentStore = useAppointmentStore();

useAsyncData(async () => await appointmentStore.getAll(), {
  initialCache: false,
});

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

</style>