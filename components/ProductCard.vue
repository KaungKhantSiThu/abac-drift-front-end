<template>
  <div class="mt-4 mb-3">
    <div class="row">
      <div class="col-md-4">
  <div class="card product-card mb-2">
    <NuxtLink :to="{ path: `/motorcycles/${motorcycle._id}` }" :key="motorcycle._id">
    <img :src="motorcycle.imageURLs[0]" class="card-img-top" alt="...">
  </NuxtLink>
    <div class="card-body">
      <div class="mt-2 text-left">
      <h5 class="card-title">{{ motorcycle.title }}</h5>
    </div>
    <div class="mt-2">
      <h6 class="text-muted">{{ motorcycle.manufacturer }}</h6>
      </div>
      <div class="row row-cols-2">
        <div class="col text-left mt-2">
          <h6 class="mb-2">Year</h6>
          <p>{{ motorcycle.year }}</p>
        </div>
        <div class="col text-right mt-2">
          <h6 class="mb-2">Engine</h6>
          <p>{{ motorcycle.engine }}</p>
        </div>
        <div class="col text-left mt-2">
          <h6 class="mb-2">Mileage</h6>
          <p>{{ motorcycle.mileage }}</p>
        </div>
        <div class="col text-right mt-2">
          <h6 class="mb-2">Gear</h6>
          <p>{{ motorcycle.gear }}</p>
        </div>
      </div>
      <div class="row">
       <div class="badge">
        <div class="text-start  text-white" style="margin-top:-2px;">
          <h5>฿ {{ motorcycle.price }}</h5>
        </div>
      </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</template>

<script setup>

defineProps({
  motorcycle: {
    type: Object,
    required: true
  }
})

</script>

<style scoped>
.product-card {
width: 270px;
height: auto;
min-height: 350px;
margin: 30px;
overflow: hidden;
border-radius: 10px;
transition: all 0.2s linear;
cursor: pointer;
}

.product-card:hover {
transform: scale(1.01);
box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
}

.card-body{
  margin-left:10px;
  margin-right:10px
}

.badge {
  border: 1px solid #fc9134;
  background-color: #fc9134;
  max-width: 100px;
  height: 40px;
  justify-content:center;
  align-items: center;
  margin-left:10px
}

.card-img-top{
  height:200px;
}
</style>