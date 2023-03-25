<template>
    <div>
        <div class="col">
            <img class="card-img-top" src="/assets/cars/car_one.jpg" alt="Card image cap">
        </div>
    </div>
    <div class="col">
        <h5 class="mt-2">Mr. Michel Wong</h5>
        <p><i class="fa-solid fa-location-dot"></i>&nbsp;&nbsp;Bangkok, 10240</p>
    </div>
    <div class="d-grid gap-2">
      <div class="mb-2">
        <p class="fs-5 fw-bold">Make an appointment with the seller</p>
        <form>
          <label for="appointment_date" class="form-label" aria-required="true">Appointment Date</label>
          <input type="date" class="form-control mb-2" id="appointment_date" name="appointment_date" />
          <label class="form-label" for="autoSizingSelect">Appointment Time</label>
          <select class="form-select" id="autoSizingSelect">
            <option selected>Choose...</option>
            <option value="1">9:00</option>
            <option value="2">10:00</option>
            <option value="3">11:00</option>
            <option value="4">12:00</option>
            <option value="5">14:00</option>
            <option value="6">15:00</option>
          </select>
        </form>
      </div>
    </div>
    <button class="btn btn-primary" type="button" onclick="window.location='./confirmation.html';"><i
                            class="fa-solid fa-calendar-check"></i>&nbsp;&nbsp;Book an appointment</button>
  </template>