<template>
    <div class="row my-3">
      <div class="card" style="width: 60rem;">
        <div class="card-body">
          <div class="row text-center">
            <h5 class="">Appointment Date & Time</h5>
            <p class="fs-5">{{ appointmentDateTime }}</p>
          </div>
          <div class="row my-3 text-center">
            <div class="col">
              <div class="row my-2">
                <h4>Seller</h4>
              </div>
              <div class="row my-3">
                <div class="col text-center px-0">
                  <img :src="mechanicProfilePic" class="rounded-circle" style="width:100px;" alt="">
                </div>
                <div class="col text-start px-0">
                  <h4 class="mt-2">{{ mechanicName }}</h4>
                  <h5 class="my-3"><i class="fa-solid fa-location-dot"></i>&nbsp;&nbsp;{{ mechanicLocation }}</h5>
                </div>
              </div>
              <div class="row text-start ms-5 mt-4">
                <h5 class="">Phone Number</h5>
                <p class="fs-5">{{ mechanicPhoneNumber }}</p>
                <h5 class="">Email Address</h5>
                <p class="fs-5">{{ mechanicEmail }}</p>
                <h5 class="">Consulting Fee</h5>
                <p class="fs-5">{{ mechanicFee }}</p>
              </div>
            </div>
            <div class="col">
              <div class="row">
                <h4>Car Information</h4>
              </div>
              <div class="row my-2">
                <div class="col">
                  <img class="card-img-top" :src="carPicture" alt="Card image cap">
                </div>
              </div>
              <div class="row my-2 text-start">
                <div class="col">
                  <h4>{{ carModel }}</h4>
                  <h5 class="text-muted">{{ carMake }}</h5>
                </div>
                <div class="col text-end">
                  <h4 class="fw-bold"><span>฿</span> {{ carPrice }}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        appointmentDateTime: 'Monday 27 September, 2022 -- 5:00pm',
        mechanicProfilePic: './img/christian.jpg',
        mechanicName: 'Mr. Peter Parker',
        mechanicLocation: 'Bangkok, 10240',
        mechanicPhoneNumber: '0673857292',
        mechanicEmail: 'mr.peterparker@gmail.com',
        mechanicFee: '1,500 Baht',
        carPicture: '/assets/cars/car_one.jpg',
        carMake: 'Toyota',
        carModel: 'GR Supra',
        carPrice: '500,000'
      }
    }
  }
  </script>
  