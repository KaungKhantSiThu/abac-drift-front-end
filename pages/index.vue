<script setup lang="ts">
definePageMeta({
  middleware: ['auth']
})

const user = useSupabaseUser();
onMounted(() => {
  watchEffect(() => {
    if (!user.value)  {
      navigateTo('/login')
    }
  })
})

</script>
<template>
  <div>
    <h2>The images in Home Page are just placeholders</h2>
<!--    <p>{{ user.user_metadata.type}}</p>-->
    <div class="row">
      <div class="column">
        <img src="/assets/cars/car_one.jpg">
        <img src="/assets/cars/car_two.jpg">
        <img src="/assets/cars/car_three.jpg">
        <img src="/assets/cars/car_four.jpg">
        <img src="/assets/cars/car_one.jpg">
        <img src="/assets/cars/car_two.jpg">
      </div>
      <div class="column">
        <img src="/assets/cars/car_one.jpg">
        <img src="/assets/cars/car_two.jpg">
        <img src="/assets/cars/car_three.jpg">
        <img src="/assets/cars/car_four.jpg">
        <img src="/assets/cars/car_one.jpg">
        <img src="/assets/cars/car_two.jpg">
      </div>
      <div class="column">
        <img src="/assets/cars/car_one.jpg">
        <img src="/assets/cars/car_two.jpg">
        <img src="/assets/cars/car_three.jpg">
        <img src="/assets/cars/car_four.jpg">
        <img src="/assets/cars/car_one.jpg">
        <img src="/assets/cars/car_two.jpg">
      </div>
      <div class="column">
        <img src="/assets/cars/car_one.jpg">
        <img src="/assets/cars/car_two.jpg">
        <img src="/assets/cars/car_three.jpg">
        <img src="/assets/cars/car_four.jpg">
        <img src="/assets/cars/car_one.jpg">
        <img src="/assets/cars/car_two.jpg">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style>
.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
}
/* Create two equal columns that sits next to each other */
.column {
  flex: 25%;
  padding: 0 4px;
}
.column img {
  margin-top: 8px;
  vertical-align: middle;
}
</style>
