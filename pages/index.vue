<template>
  <div>
    <div id="hero" class="d-flex flex-column justify-content-center ">
      <div class="hero-container" data-aos="fade-in">
        <div class="bg-dark  text-sm py-5 mx-5" style="--bs-bg-opacity: .5;">
          <h1>Welcome to ABAC-Drift</h1>
          <p><em>We offer the <strong>best</strong> second hand motorcycle service for ABAC students</em></p>
          <div class="text-start" style="margin-left: 60px;">
            <NuxtLink :to="{ path: `/motorcycles/` }">
              <button type="button" class="btn p text-white">Get Started</button>
            </NuxtLink>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>




<script setup lang="ts">
definePageMeta({
  middleware: ['auth']
})
const user = useSupabaseUser();
onMounted(() => {
  watchEffect(() => {
    if (!user.value) {
      navigateTo('/login')
    }
  })
})
</script>




<style>
body {

  color: #272829;
}

#hero {
  width: 100%;
  height: 100vh;
  background: url("@/public/assets/images/HomePageMoto.jpg") top center;
  background-size: cover;
}

#hero:before {
  color: rgba(0, 0, 0, 0.674);

  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}



#hero .hero-container {

  position: relative;
  z-index: 2;
  min-width: 300px;


}

#hero h1 {
  margin-left: 60px;
  font-size: 64px;
  font-weight: 700;
  line-height: 56px;
  color: #fff;
}

#hero p {
  margin-left: 60px;
  margin-top: 30px;
  color: #fff;
  margin-bottom: 50px;
  font-size: 26px;

}
</style>
