<template>
  <div>
    <AppointmentCard v-for="appointment in appointments" :event="appointment"/>
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
console.log(appointmentStore.appointments)
const appointments = ref([
  {
    date: "12/02/2022",
    time: "13:14:15",
    clientName: "Som Chai",
    car: {
      title: "Toyota Hilux",
      price: 256000,
      engine: 1200,
      year: 2019,
      imageURL: "/assets/cars/car_one.jpg"
    }
  },
  {
    date: "12/03/2022",
    time: "13:14:15",
    clientName: "Som Chai",
    car: {
      title: "Toyota Hilux",
      price: 256000,
      engine: 1200,
      year: 2019,
      imageURL: "/assets/cars/car_two.jpg"
    }
  },
  {
    date: "12/04/2022",
    time: "13:14:15",
    clientName: "Som Chai",
    car: {
      title: "Toyota Hilux",
      price: 256000,
      engine: 1200,
      year: 2019,
      imageURL: "/assets/cars/car_three.jpg"
    }
  }
])
</script>

<style scoped>

</style>