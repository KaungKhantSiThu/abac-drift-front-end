<template>
  <div class="container mt-5">
    <div class="row">
      <div class="flex space-x-4 text-gray-500">
        <button class="btn" @click="motorcycleModal.openModal(motorcycle)">
          <Icon size="18" name="fluent:pen-24-regular" />
         Edit</button>
        <button class="btn" @click="removeMotorcycle(motorcycle)">
          <Icon size="18" name="fluent:delete-24-regular" /> Delete
        </button>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-7">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
          <div class="carousel-indicators" style="margin-bottom:-40px;">
            <button v-for="(url, index) in motorcycle.imageURLs" type="button" data-bs-target="#carouselExampleIndicators" :data-bs-slide-to="index"
                    class="active" aria-current="true" style="width: 100px;">
              <img :src="url" class="d-block w-100 shadow-1-strong rounded" alt="" />
            </button>
          </div>
          <div class="carousel-inner">
            <div v-for="(url) in motorcycle.imageURLs" class="carousel-item active">
              <div class="smallcar">
              <img :src="url" class="d-block w-100" alt="...">
            </div>
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
          <h2 class="fw-semibold" style="margin-left: 10px;">{{motorcycle.title}}</h2>
          <div class="mt-4">
            <div class="badge text-white" style="margin-left: 10px;">
            <h3><span>฿</span> {{ motorcycle.price }}</h3>
          </div>
        </div>
        </div>
        <div>
          <h4 class="text-uppercase" style="margin-left: 10px;">Specifications</h4>
          <hr>
          <div class="row">
            <div class="col text-center mt-2" style="padding-top:8px;">
              <h5>Year</h5>
              <p class="text-muted">{{ motorcycle.year }}</p>
            </div>
            <div class="col text-center  mt-2" style="padding-top:8px;">
              <h5>Mileage</h5>
              <p class="text-muted">{{ motorcycle.mileage }}</p>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col text-center  mt-2" style="padding-top:8px;">
              <h5>Engine Size</h5>
              <p class="text-muted">{{ motorcycle.engine }}</p>
            </div>
            <div class="col text-center  mt-2" style="padding-top:8px;">
              <h5>Gearbox</h5>
              <p class="text-muted">{{ motorcycle.gear }}</p>
            </div>
          </div>
        </div>
        <hr>
        <div class="row" style="cursor: pointer;" >
          <div class="col-2 mt-2">
            <img src="/assets/motorcycle/pepe.jpg" style="min-width:65px; margin-left: 10px;" class="rounded-circle" alt="">
          </div>
          <div class="col">
            <h5 class="mt-2" style="margin-left: 20px; padding-top:8px;">{{ motorcycle.seller }}</h5>
            <p><i class="fa-solid fa-location-dot text-muted" style="margin-left: 20px;"></i>Bangkok, 10240</p>
          </div>
        </div>
        <hr>
        <div class="my-2">
          <h5 class="text-uppercase mb-3" style="margin-left: 10px;">Description</h5>
          <p class="text-muted" style="margin-left: 10px;">
            {{ motorcycle.description }}
          </p>
        </div>
        <hr>
        <div v-if="currentUser.type === 'buyer'">
          <p class="fs-5 fw-bold">Make an appointment with the seller</p>
          <form @submit="submitAppointment">
            <FormInput
                       rules="required" label="Date" type="date"
                       name="date" />

            <FormInput
                rules="required" label="Time" type="time"
                name="time" min="9:00" max="21:00"/>

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

<script setup lang="ts">
import {useMotorcycleStore} from "~/composables/motorcycleStore";
import { useForm } from "vee-validate"
import {useUserStore} from "~/composables/userStore";

const user = useSupabaseUser();

const userStore = useUserStore();
const currentUser = await userStore.getByEmail(user.value.email)

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
<style>
.btn {
  background-color: DodgerBlue; /* Blue background */
  border: none; /* Remove borders */
  color: white; /* White text */
  padding: 12px 16px; /* Some padding */
  font-size: 16px; /* Set a font size */
  cursor: pointer; 
  width:150px;/* Mouse pointer on hover */
}

/* Darker background on mouse-over */
.btn:hover {
  background-color: RoyalBlue;
}
.icon{
  text-align: center;
  justify-content: center;
  margin-bottom: 3px;
  
}
.badge {
  border: 1px solid;
  border-color: #fc9134;
  background-color: #fc9134;
  max-width: 250px;
  height: 50px;
  justify-content:center;
  align-items: center;
  padding-top: 8px;
}

.smallcar{
  height:400px;
}

.btn{
  width:200px;
}

</style>
