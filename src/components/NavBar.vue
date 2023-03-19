<template>
  <nav class="navbar navbar-expand-lg bg-light" style="background: linear-gradient(90deg, rgba(14,28,70,1) 37%, rgba(61,128,175,1) 100%);">
          <div class="container-fluid mx-5">
              <Link href="/"  class="navbar-brand">
                  <img src="../assets/images/au.png" width="50" class="logo" />
              </Link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                  aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div class="navbar-nav">
                      <Link  href="./MotorcycleDetails.vue" class="nav-link text-white" >Motorcycles Details</Link>
                      <Link href="" class="nav-link text-white" >My Appointments</Link>
                      <Link href="" class="nav-link text-white" >About</Link>
                  </div>
                  <div class="navbar-nav ms-auto">
                      <div class="navbar-nav">
                          <a href="" class="nav-link border-end px-3 text-white" data-bs-toggle="modal"
                          data-bs-target="#signInModal">Sign In</a>
                          <div class="dropdown">
                              <Link  href="#" class="nav-link dropdown-toggle px-3 text-white" type="button"
                                  data-bs-toggle="dropdown" aria-expanded="false">Register</Link>
                              <div class="dropdown-menu dropdown-menu-end">
                                  <Link href="" class="dropdown-item py-2 border-bottom" type="button" data-bs-toggle="modal"
                                      data-bs-target="#registerModal">Register</Link>
                                  <Link href="" class="dropdown-item py-2" type="button" data-bs-toggle="modal"
                                      data-bs-target="#registerSellerModal">Register as Seller</Link>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </nav>

</template>

<script>
export default {
  name: "NavBar"
}
</script>


<style scoped>
.navbar {
 
  padding-top: .5rem;
  padding-bottom: 0px !important;
}

.logo{
margin-bottom: 7px !important;	
}

</style>


