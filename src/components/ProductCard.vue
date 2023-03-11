<template>
  <div class="card product-card">
    <img :src="car.imageURL" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{ car.title }}</h5>
      <h6 class="text-secondary">{{ car.manufacturer }}</h6>
      <div class="row">
        <div class="col text-center">
          <h6 class="mb-2">Year</h6>
          <p>{{ car.year }}</p>
        </div>
        <div class="col text-center">
          <h6 class="mb-2">Engine</h6>
          <p>{{ car.engine }}</p>
        </div>
        <div class="col text-center">
          <h6 class="mb-2">Mileage</h6>
          <p>{{ car.mileage }}</p>
        </div>
        <div class="col text-center">
          <h6 class="mb-2">Gear</h6>
          <p>{{ car.gear }}</p>
        </div>
      </div>
      <div class="row mx-3">
        <div class="col text-start">
          <i class="fa-solid fa-eye"></i>
          <span>500</span>
        </div>
        <div class="col text-end">
          <h4><span>฿</span> {{ car.price }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  car: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.product-card {
  width: 340px;
	height: auto;
	min-height: 450px;
  padding: 10px 15px;
	margin-bottom: 24px;
	margin-right: 10px;
	overflow: hidden;
	transition: all 0.2s linear;
	cursor: pointer;
}
</style>