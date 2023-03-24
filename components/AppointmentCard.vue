<template>
  <div class="row my-3">
    <div class="card" style="width: 60rem;">
      <div class="card-body">
        <div class="row my-3 text-center">
          <div class="col">
            <h5 class="card-text">Date</h5>
            <p class="fs-5">{{ event.date }}</p>
          </div>
          <div class="col">
            <h5 class="card-text">Time</h5>
            <p class="fs-5">{{ event.time }}</p>
          </div>
          <div class="col">
            <h5 class="card-text">Client</h5>
            <p class="fs-5">{{ event.clientName }}</p>
          </div>
        </div>


        <div class="row">
          <div class="col-4">
            <img class="card-img-top" :src="event.car.imageURL" alt="Card image cap">
          </div>
          <div class="col">
            <h4>Toyota GR Supra</h4>
            <h5 class="text-muted">{{ event.car.title }}</h5>
            <div class="row my-3 text-center">
              <div class="col">
                <h5 class="card-text">Year</h5>
                <p class="fs-5">{{ event.car.year }}</p>
              </div>
              <div class="col">
                <h5 class="card-text">Engine</h5>
                <p class="fs-5">{{ event.car.engine }}</p>
              </div>
              <div class="col">
                <h5 class="card-text">Price</h5>
                <p class="fs-5">{{ event.car.price }}</p>
              </div>
            </div>
            <div class="row text-end">
              <div class="col">

              </div>
              <div class="col-2">
                <button type="button" class="btn p" onclick="console.log('tapped!')">View <span><i class="fa-solid fa-arrow-right"></i></span></button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  event: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>

</style>