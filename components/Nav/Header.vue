<template>
	<header class="w-full border-b border-gray-200 bg-white/50 backdrop-blur">
		<div class="flex items-center justify-between h-20 px-3 mx-auto max-w-7xl">
      <button
          v-if="user"
          @click="logOut"
          key="menuItemLogOut"
          class="px-3 py-2 text-sm font-medium text-gray-500 transition-all rounded-lg link hover:text-primary hover:bg-primary-50"
      >Log Out</button>

			<nav class="flex items-center space-x-2">
				<template v-if="user" v-for="n in menu" :key="`menuItem${n.name}`">
					<NuxtLink
						class="px-3 py-2 text-sm font-medium text-gray-500 transition-all rounded-lg link hover:text-primary hover:bg-primary-50"
						:to="n.link"
						>{{ n.name }}
          </NuxtLink>
				</template>

        <template v-if="!user" key="menuItemLogin">
          <NuxtLink
              class="px-3 py-2 text-sm font-medium text-gray-500 transition-all rounded-lg link hover:text-primary hover:bg-primary-50"
              to="/login"
          >Login</NuxtLink>
        </template>
			</nav>

      <button v-if="currentUser && user"
              key="menuItemUser"
              class="px-3 py-2 text-sm font-medium text-gray-500 transition-all rounded-lg link hover:text-primary hover:bg-primary-50"
      > {{ currentUser.username }} </button>

		</div>
	</header>
</template>

<script setup>
	import {useUserStore} from "~/composables/userStore";

  const menu = ref([
		{ name: "Home", link: "/" },
    { name: "Motorcycles", link: "/motorcycles" },
    { name: "Appointments", link: "/appointments" },
	]);

  const client = useSupabaseAuthClient();
  const user = useSupabaseUser();

  const userStore = useUserStore();
  const currentUser = ref(null)

  onMounted(() => {
    watchEffect(async () => {
      if (user.value) {
        currentUser.value = await userStore.getByEmail(user.value.email)
      }
    })
  })

  async function logOut() {
    const { error } = await client.auth.signOut();
    if (error) return;
    navigateTo('/login')
  }

</script>

<style scoped>
	.router-link-active.link {
		@apply text-primary bg-primary-50;
	}
</style>
