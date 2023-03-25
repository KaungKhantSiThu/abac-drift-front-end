<template>
    <div class="card product-card">
      <NuxtLink :to="{ path: 'MotorDetails', params: { _id: motorcycle._id } }">
      <img :src="motorcycle.imageURL" class="card-img-top" alt="...">
    </NuxtLink>
      <div class="card-body">
        <h5 class="card-title">{{ motorcycle.title }}</h5>
        <h6 class="text-secondary">{{ motorcycle.manufacturer }}</h6>
        <div class="row row-cols-2">
          <div class="col text-center">
            <h6 class="mb-2">Year</h6>
            <p>{{ motorcycle.year }}</p>
          </div>
          <div class="col text-center">
            <h6 class="mb-2">Engine</h6>
            <p>{{ motorcycle.engine }}</p>
          </div>
          <div class="col text-center">
            <h6 class="mb-2">Mileage</h6>
            <p>{{ motorcycle.mileage }}</p>
          </div>
          <div class="col text-center">
            <h6 class="mb-2">Gear</h6>
            <p>{{ motorcycle.gear }}</p>
          </div>
        </div>
        <div class="row">
          <div class="col text-center">
            <i class="fa-solid fa-eye"></i>
            <span>500</span>
          </div>
          <div class="col text-end">
            <h5>฿ {{ motorcycle.price }}</h5>
          </div>
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

<style scoped>
.product-card {
  width: 250px;
  height: auto;
  min-height: 350px;
  margin: 10px;
  overflow: hidden;
  border-radius: 10px;
  transition: all 0.2s linear;
  cursor: pointer;
}

.product-card:hover {
  transform: scale(1.01);
  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
}
</style>