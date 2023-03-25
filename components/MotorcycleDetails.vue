<template>
    <div>{{_id}}</div>
     <div class="container mt-4">
        <div class="row">
            <div class="col-7">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                    <div class="carousel-indicators" style="margin-bottom:-20px;">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            class="active" aria-current="true" aria-label="Slide 1" style="width: 100px;">
                            <img :src="motorcycle.imageURL" class="d-block w-100 shadow-1-strong rounded" alt=""></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2" style="width: 100px;"><img :src="motorcycle.imageURL"
                                class="d-block w-100 shadow-1-strong rounded" alt=""></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3" style="width: 100px;"><img :src="motorcycle.imageURL"
                                class="d-block w-100 shadow-1-strong rounded" alt=""></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img :src="motorcycle.imageURL" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img :src="motorcycle.imageURL" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img :src="motorcycle.imageURLL" class="d-block w-100" alt="...">
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
                    <h2 class="">{{title}}</h2>
                    <h3 class="my-3 fw-bold"><span>฿</span> 899,000</h3>
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
                <div class="row" style="cursor: pointer;" onclick="window.location='./seller_profile.html';">
                    <div class="col-2">
                        <img src="@/public/assets/motorcycle/pepe.jpg" style="width:75px;" class="rounded-circle" alt="">
                    </div>
                    <div class="col">
                        <h5 class="mt-2">Mr. Michel Wong</h5>
                        <p><i class="fa-solid fa-location-dot"></i>&nbsp;&nbsp;Bangkok, 10240</p>
                    </div>
                </div>
                <hr>
                <div class="my-2">
                    <h5 class="text-uppercase mb-3">Description</h5>
                    <p>
                        Ford Territory <br>
                        Excellent condition - re-sprayed entire exterior in 2020 <br>
                        Well maintained <br>
                        Serviced regularly <br>
                        Upgraded entertainment system in 2020, can link with your phone <br>
                        New rear speakers upgraded in 2022
                    </p>
                </div>
                <hr>
                    <button class="btn btn-primary" type="button" onclick="window.location='';"><i
                            class="fa-solid fa-calendar-check"></i>&nbsp;&nbsp;Book an appointment</button>
                </div>

            </div>
        </div> 
</template>

<script setup>
const props = defineProps({
  motorcycle: {
    type: Object,
    required: true
  }
})

</script>
