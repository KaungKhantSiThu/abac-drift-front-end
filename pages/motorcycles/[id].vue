<template>
  <div class="container mt-4">
    <div class="row">
      <NuxtLink to="/motorcycles">Back</NuxtLink>
      <div class="flex space-x-4 text-gray-500">
        <button @click="motorcycleModal.openModal(motorcycle)">
          <Icon size="18" name="fluent:pen-24-regular" />
        </button>
        <button @click="removeMotorcycle(motorcycle)">
          <Icon size="18" name="fluent:delete-24-regular" />
        </button>
      </div>
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
          </div>
          <hr>
          <div class="row">
            <div class="col text-center">
              <h5>Engine Size</h5>
              <p>{{ motorcycle.engine }}</p>
            </div>
            <div class="col text-center">
              <h5>Gearbox</h5>
              <p>{{ motorcycle.gear }}</p>
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
        <div>
          <p class="fs-5 fw-bold">Make an appointment with the seller</p>
          <form @submit="submitAppointment">
            <FormInput
                       rules="required" label="Date" type="date"
                       name="date" />

            <FormInput
                rules="required" label="Time" type="time"
                name="time" />

            <FormInput
                rules="required" label="Location" type="text"
                name="location" />

            <FormInput
                rules="required" label="Note" type="text"
                name="note" />

            <button type="submit" class="btn btn-primary" >Book an appointment</button>
          </form>
        </div>
      </div>
    </div>

    <MotorcycleModal ref="motorcycleModal" />

  </div>
</template>
8
<script setup lang="ts">
import {useMotorcycleStore} from "~/composables/motorcycleStore";
import { useForm } from "vee-validate"

const user = useSupabaseUser();
const motorcycleStore = useMotorcycleStore();
const appointmentStore = useAppointmentStore();
const appointment = ref({});

const id  = useRoute().params.id as string;

const motorcycle = await motorcycleStore.getById(id);

const { handleSubmit } = useForm({
  initialValues: appointment,
})
const submitAppointment = handleSubmit(async (values, ctx) => {
  const appointmentObject = {...values, motorcycle: motorcycle, seller: motorcycle.seller, buyer: user.value.email, status: "upcoming"}
  appointmentObject['datetime'] = new Date(appointmentObject['date'] + ' ' + appointmentObject['time']);
  delete appointmentObject['date']
  delete appointmentObject['time']
  await appointmentStore.create(appointmentObject)
  console.log(appointmentObject)
})

const motorcycleModal = ref();

const removeMotorcycle = async (motorcycle) => {
  await motorcycleStore.remove(motorcycle._id)
}

</script>

