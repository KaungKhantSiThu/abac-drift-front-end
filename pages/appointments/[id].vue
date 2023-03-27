<template>
  <div class="row my-3">
    <div class="card" style="width: 60rem;">
      <div class="card-body">
        <div class="row text-center">
          <h5 class="">Appointment Date & Time</h5>
          <p class="fs-5">{{ appointment.datetime }}</p>
        </div>
        <div class="row my-3 text-center">
          <div class="col">
            <div class="row my-2">
              <h4>Seller</h4>
            </div>
            <div class="row my-3">
              <div class="col text-start px-0">
                <h4 class="mt-2">{{ appointment.buyer }}</h4>
                <h5 class="my-3"><i class="fa-solid fa-location-dot"></i>{{ appointment.location }}</h5>
              </div>
            </div>
            <div class="row text-start ms-5 mt-4">
              <h5 class="">Phone Number</h5>
              <p class="fs-5">{{ appointment.status }}</p>
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

const appointmentStore = useAppointmentStore();
const id = useRoute().params.id as string;

const appointment = await appointmentStore.getById(id);

</script>