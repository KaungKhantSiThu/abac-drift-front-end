<template>
  <div class="container mt-4">
    <div class="row">
      <NuxtLink to="/motorcycles">Back</NuxtLink>
    </div>
    <div class="row">
      <div class="col-7">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
          <div class="carousel-indicators" style="margin-bottom:-20px;">
            <button v-for="(url, index) in motorcycle.imageURLs" type="button" data-bs-target="#carouselExampleIndicators" :data-bs-slide-to="index"
                    class="active" aria-current="true" style="width: 100px;">
              <img :src="url" class="d-block w-100 shadow-1-strong rounded" alt="" />
            </button>
          </div>
          <div class="carousel-inner">
            <div v-for="(url) in motorcycle.imageURLs" class="carousel-item active">
              <img :src="url" class="d-block w-100" alt="...">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div class="col-5 overflow-auto" style="height: 800px;">
        <div class="">
          <p class="mb-2 fs-6 text-end"><i class="fa-regular fa-heart fs-4"></i></p>
        </div>
        <div class="mb-4">
          <h2 class="">{{motorcycle.title}}</h2>
          <h3 class="my-3 fw-bold"><span>฿</span> {{ motorcycle.price }}</h3>
        </div>
        <div>
          <h4 class="text-uppercase">Specification</h4>
          <hr>
          <div class="row">
            <div class="col text-center">
              <h5>Year</h5>
              <p>{{ motorcycle.year }}</p>
            </div>
            <div class="col text-center">
              <h5>Mileage</h5>
              <p>{{ motorcycle.mileage }}</p>
            </div>
            <div class="col text-center">
              <h5>Gearbox</h5>
              <p>{{ motorcycle.gear }}</p>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col text-center">
              <h5>Engine Size</h5>
              <p>{{ motorcycle.engine }}</p>
            </div>
            <div class="col text-center">
              <h5>Fuel Type</h5>
              <p>{{ motorcycle.fuelType }}</p>
            </div>
          </div>
        </div>
        <hr>
        <div class="row" style="cursor: pointer;" >
          <div class="col-2">
            <img src="/assets/motorcycle/pepe.jpg" style="width:75px;" class="rounded-circle" alt="">
          </div>
          <div class="col">
            <h5 class="mt-2">{{ motorcycle.seller }}</h5>
            <p><i class="fa-solid fa-location-dot"></i>Bangkok, 10240</p>
          </div>
        </div>
        <hr>
        <div class="my-2">
          <h5 class="text-uppercase mb-3">Description</h5>
          <p>
            {{ motorcycle.description }}
          </p>
        </div>
        <hr>
        <button class="btn btn-primary" type="button"><i
            class="fa-solid fa-calendar-check"></i>Book an appointment</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MotorcycleDetails from "~/components/MotorcycleDetails.vue";
import {useMotorcycleStore} from "~/composables/motorcycleStore";

const motorcycleStore = useMotorcycleStore();

const id  = useRoute().params.id;
const motorcycle = motorcycleStore.getMotorcycleById(id);

</script>

