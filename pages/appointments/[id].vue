<template>
  <div class="row my-3 mt-5 justify-content-center">
    <div class="card" style="width: 60rem;">
      <div class="card-body">
        <div class="row text-center">
          <h5 class="mt-5">Appointment Date & Time</h5>
          <p class="fs-5">{{ appointment.datetime }}</p>
        </div>
        <div class="row my-3 text-left">
          <div class="col">
            <div class="row my-2">
              <h4>Seller</h4>
              <div class=" text-start px-3">
                <p class="fs-5">{{ appointment.buyer }}</p>
              </div>
            </div>
            <div class="row my-3">
              <h4>Location</h4>
              <div class="col text-start px-3">
                <p class="fs-5"><i class="fa-solid fa-location-dot"></i>{{ appointment.location }}</p>
              </div>
            </div>
            <div class="row my-3">
              <h4>Phone Number</h4>
              <div class="col text-start px-3">
                <p class="fs-5">{{ appointment.status }}</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row">
              <h4>Car Information</h4>
            </div>
            <div class="row my-2">
              <div class="col">
                <img class="card-img-top" :src="appointment.motorcycle.imageURLs[0]" alt="...">
              </div>
            </div>
            <div class="row my-2 text-start">
              <div class="col">
                <h4>{{ appointment.motorcycle.title }}</h4>
                <h5 class="text-muted">{{ appointment.motorcycle.manufacturer }}</h5>
              </div>
              <div class="col text-end">
                <h4 class="fw-bold"><span>฿</span> {{ appointment.motorcycle.price }}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {useUserStore} from "~/composables/userStore";

const appointmentStore = useAppointmentStore();
const id = useRoute().params.id as string;

const appointment = await appointmentStore.getById(id);

const user = useSupabaseUser();

const userStore = useUserStore();
const currentUser = await userStore.getByEmail(user.value.email)


</script>