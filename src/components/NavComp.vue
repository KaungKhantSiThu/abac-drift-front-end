<template>
    <nav class="navbar navbar-expand-lg bg-light" style="background: linear-gradient(90deg, rgba(14,28,70,1) 37%, rgba(61,128,175,1) 100%);">
            <div class="container-fluid mx-5">
                <router-link to="/"  class="navbar-brand">
                    <img src="@/assets/images/au.png" width="50" class="logo" />
                </router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <router-link  to ="/MotorcycleDetails" class="nav-link text-white" >Motorcycles Details</router-link>
                        <router-link to="" class="nav-link text-white" >My Appointments</router-link>
                        <router-link to="/about" class="nav-link text-white" >About</router-link>
                    </div>
                    <div class="navbar-nav ms-auto">
                        <div class="navbar-nav">
                            <router-link to="" class="nav-link border-end px-3 text-white" data-bs-toggle="modal"
                            data-bs-target="#signInModal">Sign In</router-link>
                            <div class="dropdown">
                                <router-link to="" href="#" class="nav-link dropdown-toggle px-3 text-white" type="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">Register</router-link>
                                <div class="dropdown-menu dropdown-menu-end">
                                    <router-link to="" class="dropdown-item py-2 border-bottom" type="button" data-bs-toggle="modal"
                                        data-bs-target="#registerModal">Register</router-link>
                                    <router-link to="" class="dropdown-item py-2" type="button" data-bs-toggle="modal"
                                        data-bs-target="#registerSellerModal">Register as Seller</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

</template>

<style scoped>
.navbar {
   
    padding-top: .5rem;
    padding-bottom: 0px !important;
}

.logo{
	margin-bottom: 7px !important;	
}

</style>