<template>
  <div class="row my-3 mt-5 justify-content-center">
  <div class="col-md-9">
    <div class="card">
      <div class="card-body">
        <div class="row my-3 text-center">
          <div class="col">
            <h5 class="card-text">Date </h5>
            <p class="fs-5">{{ new Date(event.datetime).toDateString() }}</p>
          </div>
          <div class="col">
            <h5 class="card-text">Time</h5>
            <p class="fs-5">{{ new Date(event.datetime).getHours() + ':' + new Date(event.datetime).getMinutes() }}</p>
          </div>
          <div class="col">
            <h5 class="card-text">Client</h5>
            <p class="fs-5">{{ event.buyer }}</p>
          </div>
        </div>


        <div class="row">
          <div class="col-4 mt-3">
            <img class="card-img-top" :src="event.motorcycle.imageURLs[0]" alt="Card image cap">
          </div>
          <div class="col">
            <h5 class="fw-bold mt-3" style="margin-left:40px;">{{ event.motorcycle.title }}</h5>
            <div class="row my-3 mt-4" style="margin-left:25px;">
              <div class="col">
                <h5 class="card-text">Year</h5>
                <p class="fs-5">{{ event.motorcycle.year }}</p>
              </div>
              <div class="col">
                <h5 class="card-text">Engine</h5>
                <p class="fs-5">{{ event.motorcycle.engine }}</p>
              </div>
            </div>
              <div class="row my-3 mt-3" style="margin-left:25px;">
              <div class="col">
                <h5 class="card-text">Price</h5>
                <p class="fs-5">฿ {{ event.motorcycle.price }}</p>
              </div>
            </div>
            <div class="row text-end">
              <div class="col">

              </div>
              <div class="col">
                <NuxtLink :to="{ path: `/appointments/${event._id}` }" :key="event._id">
                <button type="button" class="btn p">View <span><i class="fa-solid fa-arrow-right"></i></span></button>
                </NuxtLink>
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
  event: {
    type: Object,
    required: true
  }
})

</script>

<style scoped>

.card{
  width: 60rem;
}
.btn{
  width:100px
}
.card-img-top{
  width:400px;
}

</style>