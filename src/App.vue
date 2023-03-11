<script setup>
import NavBar from "./components/NavBar.vue";
import ProductList from "./components/ProductList.vue";

</script>

<template>
  <header>
    <nav-bar />
  </header>
  <div class="container mt-4">
    <div class="row">
      <div class="col-sm-3">
        <div class="mb-3">
          <div>
            <h5 class="text-start"><i class="fa-solid fa-location-dot"></i> Current Location</h5>
            <input class="form-control" type="text" placeholder="Bangkok, 10240"
                   aria-label="default input example">
          </div>
        </div>
        <div class="card">
          <ul class="list-group list-group-flush">
            <li class="list-group-item h5 text-center">Filter By</li>
            <li class="list-group-item">
              <h6>Brand</h6>
              <select class="form-select" id="autoSizingSelect">
                <option selected>Choose brand</option>
                <option value="1">Toyota</option>
                <option value="2">Mercedes</option>
                <option value="3">Honda</option>
                <option value="4">BMW</option>
                <option value="3">Ford</option>
                <option value="4">Mazda</option>
              </select>
            </li>
            <li class="list-group-item">
              <h6>Model</h6>
              <select class="form-select" id="autoSizingSelect" disabled>
                <option selected>Choose model</option>
                <option value="1">H247</option>
                <option value="2">W223</option>
                <option value="3">W206</option>
                <option value="4">H243</option>
                <option value="3">R50 One</option>
                <option value="4">X243</option>
              </select>
            </li>
            <li class="list-group-item">
              <h6>Mileage</h6>
              <!-- <span><i class="fa-solid fa-chevron-down"></i></span> -->
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  0 - 5,000 km
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  5,000 - 10,000 km
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  10,000 - 20,000 km
                </label>
              </div>

            </li>
            <li class="list-group-item">
              <h6>Year</h6>
              <select class="form-select" id="autoSizingSelect">
                <option selected>Choose year</option>
                <option value="1">2022</option>
                <option value="2">2021</option>
                <option value="3">2020</option>
                <option value="4">2019</option>
                <option value="3">2018</option>
                <option value="4">2017</option>
              </select>
            </li>
            <li class="list-group-item">
              <h6>Price</h6>
              <!-- <span><i class="fa-solid fa-chevron-down"></i></span> -->
              <div class="row">
                <div class="col">
                  <select class="form-select" id="autoSizingSelect">
                    <option selected>min</option>
                    <option value="1">25,000 Baht</option>
                    <option value="2">30,000 Baht</option>
                    <option value="3">40,000 Baht</option>
                    <option value="4">50,000 Baht</option>
                    <option value="2">60,000 Baht</option>
                    <option value="3">70,000 Baht</option>
                  </select>
                </div>
                <div class="col">
                  <select class="form-select" id="autoSizingSelect">
                    <option selected>max</option>
                    <option value="1">50,000 Baht</option>
                    <option value="2">60,000 Baht</option>
                    <option value="3">70,000 Baht</option>
                    <option value="4">80,000 Baht</option>
                    <option value="3">90,000 Baht</option>
                    <option value="4">100,000 Baht</option>
                  </select>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="d-grid gap-2 mt-3">
          <button type="button" class="btn btn-primary">Search</button>
        </div>
      </div>
      <div class="col-md">
        <div class="row">
          <h2>Recommended Cars</h2>
        </div>
        <div>
          <product-list />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  min-height: 75rem;
}
</style>
