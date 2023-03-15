<template>
    <div class="container mt-4">
        <div class="row">
            <div class="col-7">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                    <div class="carousel-indicators" style="margin-bottom:-20px;">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            class="active" aria-current="true" aria-label="Slide 1" style="width: 100px;"><img
                                src="../assets/images/bike_one.jpg" class="d-block w-100 shadow-1-strong rounded" alt=""></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2" style="width: 100px;"><img src="../assets/images/bike_two.jpg"
                                class="d-block w-100 shadow-1-strong rounded" alt=""></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3" style="width: 100px;"><img src="../assets/images/bike_three.jpg"
                                class="d-block w-100 shadow-1-strong rounded" alt=""></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="../assets/images/bike_three.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="../assets/images/bike_two.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="../assets/images/bike_three.jpg" class="d-block w-100" alt="...">
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
                    <h2 class="">Ford Teritory</h2>
                    <h3 class="my-3 fw-bold"><span>฿</span> 500,000</h3>
                </div>
                <div>
                    <h4 class="text-uppercase">Specification</h4>
                    <hr>
                    <div class="row">
                        <div class="col text-center">
                            <h5>Year</h5>
                            <p>2018</p>
                        </div>
                        <div class="col text-center">
                            <h5>Seat Capacity</h5>
                            <p>4</p>
                        </div>
                        <div class="col text-center">
                            <h5>Mileage</h5>
                            <p>3,000 km</p>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col text-center">
                            <h5>Gearbox</h5>
                            <p>Automatic</p>
                        </div>
                        <div class="col text-center">
                            <h5>Engine Size</h5>
                            <p>3,000 cc</p>
                        </div>
                        <div class="col text-center">
                            <h5>Fuel Type</h5>
                            <p>Disel</p>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="row" style="cursor: pointer;" onclick="window.location='./seller_profile.html';">
                    <div class="col-2">
                        <img src="../assets/images/pepe.jpg" style="width:75px;" class="rounded-circle" alt="">
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
                <div class="d-grid gap-2">
                    <div class="mb-2">
                        <p class="fs-5 fw-bold">Make an appointment with the seller</p>
                        <form action="">
                            <label for="appointment_date" class="form-label" aria-required="true">Appointment
                                Date</label>
                            <input type="date" class="form-control mb-2" id="appointment_date" name="appointment_date">
                            <label class="form-label" for="autoSizingSelect">Appointment Time</label>
                            <select class="form-select" id="autoSizingSelect">
                                <option selected>Choose...</option>
                                <option value="1">9:00</option>
                                <option value="2">10:00</option>
                                <option value="3">11:00</option>
                                <option value="4">12:00</option>
                                <option value="3">14:00</option>
                                <option value="4">15:00</option>
                            </select>
                        </form>
                        <div class="my-4">
                            <div class="form-check mb-3">
                                <input class="form-check-input" type="checkbox" id="hireMechanic" value="0">
                                <label class="form-check-label" for="autoSizingCheck2">
                                    Do you wanna hire a mechanic to check the vehicle?
                                </label>
                            </div>
                            <div id="mechanicsdiv" style="display: none;">
                                <h6>Choose an mechanics</h6>
                                <ul class="list-group">
                                    <li class="list-group-item">
                                        <div class="row">
                                            <div class="col-1 my-auto">
                                                <input class="form-check-input" type="radio" name="listGroupRadio"
                                                    value="" id="firstRadio" checked>
                                            </div>
                                            <div class="col-2 my-auto">
                                                <img src="../assets/images/pepe.jpg" class="rounded-circle"
                                                    style="width:75px;" alt="">
                                            </div>
                                            <div class="col my-auto" style="cursor: pointer;"
                                                onclick="window.location='./mechanic_profile.html';">
                                                <p class="fw-bold fs-6 mb-0">Mr. Micheal Johnson</p>
                                                <div class="">
                                                    <i class="fa fa-star rating-color"></i>
                                                    <i class="fa fa-star rating-color"></i>
                                                    <i class="fa fa-star rating-color"></i>
                                                    <i class="fa fa-star rating-color"></i>
                                                    <i class="fa fa-star"></i>
                                                    &nbsp;&nbsp;12 reviews
                                                </div>
                                                <p class="mb-1">Serivce Fee: <span>฿&nbsp;&nbsp;100</span></p>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        <div class="row">
                                            <div class="col-1 my-auto">
                                                <input class="form-check-input" type="radio" name="listGroupRadio"
                                                    value="" id="firstRadio" checked>
                                            </div>
                                            <div class="col-2 my-auto">
                                                <img src="../assets/images/jpg" class="rounded-circle"
                                                    style="width:75px;" alt="">
                                            </div>
                                            <div class="col my-auto" style="cursor: pointer;"
                                                onclick="window.location='';">
                                                <p class="fw-bold fs-6 mb-0">Mr. Micheal Johnson</p>
                                                <div class="">
                                                    <i class="fa fa-star rating-color"></i>
                                                    <i class="fa fa-star rating-color"></i>
                                                    <i class="fa fa-star rating-color"></i>
                                                    <i class="fa fa-star rating-color"></i>
                                                    <i class="fa fa-star"></i>
                                                    &nbsp;&nbsp;12 reviews
                                                </div>
                                                <p class="mb-1">Serivce Fee: <span>฿&nbsp;&nbsp;100</span></p>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        <div class="row">
                                            <div class="col-1 my-auto">
                                                <input class="form-check-input" type="radio" name="listGroupRadio"
                                                    value="" id="firstRadio" checked>
                                            </div>
                                            <div class="col-2 my-auto">
                                                <img src="../assets/images/jpg" class="rounded-circle"
                                                    style="width:75px;" alt="">
                                            </div>
                                            <div class="col my-auto" style="cursor: pointer;"
                                                onclick="window.location='';">
                                                <p class="fw-bold fs-6 mb-0">Mr. Micheal Johnson</p>
                                                <div class="">
                                                    <i class="fa fa-star rating-color"></i>
                                                    <i class="fa fa-star rating-color"></i>
                                                    <i class="fa fa-star rating-color"></i>
                                                    <i class="fa fa-star rating-color"></i>
                                                    <i class="fa fa-star"></i>
                                                    &nbsp;&nbsp;12 reviews
                                                </div>
                                                <p class="mb-1">Serivce Fee: <span>฿&nbsp;&nbsp;100</span></p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <button class="btn btn-primary" type="button" onclick="window.location='';"><i
                            class="fa-solid fa-calendar-check"></i>&nbsp;&nbsp;Book an appointment</button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "MotorcycleDetails"
}
</script>