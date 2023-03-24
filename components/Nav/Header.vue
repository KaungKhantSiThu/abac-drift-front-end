<template>
	<header class="navbar navbar-expand-lg bg-light" style="background: linear-gradient(90deg, rgba(14,28,70,1) 37%, rgba(61,128,175,1) 100%);">
		<div class="container-fluid mx-5">
                <NuxtLink to="/"  class="navbar-brand">
                    <img src="@/public/assets/motorcycle/au.png" width="50" class="logo" />
                </NuxtLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <template v-for="n in menu" :key="`menuItem${n.name}`">
					<NuxtLink
						class="px-3 py-2 text-sm font-medium text-white "
						:to="n.link"
						>{{ n.name }}</NuxtLink
					>
				</template>
                    <div class="navbar-nav ms-auto">
                        <ul class="navbar-nav">
                            <NuxtLink to="" class="nav-link border-end px-3 text-white" data-bs-toggle="modal"
                            data-bs-target="#signInModal">Sign In</NuxtLink>
                            <div class="dropdown">
                                <NuxtLink to="" href="#" class="nav-link dropdown-toggle px-3 text-white" type="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">Register</NuxtLink>
                                <div class="dropdown-menu dropdown-menu-end">
                                    <NuxtLink to="" class="dropdown-item py-2 border-bottom" type="button" data-bs-toggle="modal"
                                        data-bs-target="#registerModal">Register</NuxtLink>
                                    <NuxtLink to="" class="dropdown-item py-2" type="button" data-bs-toggle="modal"
                                        data-bs-target="#registerSellerModal">Register as Seller</NuxtLink>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
	</header>
</template>

<script setup>
	const menu = ref([
		{ name: "Home", link: "/" },
    { name: "Motorcycles", link: "/motorcycles" },
    { name: "Appointments", link: "/appointments" },
	]);
</script>

<style scoped>
	.router-link-active.link {
		@apply text-primary bg-primary-50;
	}
</style>
