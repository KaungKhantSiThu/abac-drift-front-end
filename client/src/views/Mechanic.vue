<template>
  <div class="row">
    <h3>My Appointments</h3>
  </div>
  <div class="row mt-4 mb-3">
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link active px-5" aria-current="page" href="#">Upcoming</a>
      </li>
      <li class="nav-item">
        <a class="nav-link px-5" href="#">Pending</a>
      </li>
      <li class="nav-item">
        <a class="nav-link px-5" href="#">Completed</a>
      </li>
    </ul>
  </div>
  <!-- Car Detail Cards -->
  <AppointmentList/>

</template>

<script setup>

import AppointmentList from "../components/AppointmentList.vue";

</script>

<style scoped>

</style>