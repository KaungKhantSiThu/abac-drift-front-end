<template>
	<header class="w-full border-b border-gray-200 bg-white/50 backdrop-blur" style="background:#5c5470;">
		<div class="flex items-center justify-between h-20 px-3 mx-auto max-w-7xl">
      <NuxtLink to="/">
        <img src="https://img.icons8.com/3d-fluency/94/null/motorcycle.png" alt="website icon" class="icon"/>
      </NuxtLink>
			<nav class="flex items-center px-20">

				<template v-if="user" v-for="n in menu" :key="`menuItem${n.name}`">
					<NuxtLink
						class="px-3 py-2 text-sm font-medium text-slate-200 transition-all rounded-lg link hover:text-primary hover:bg-primary-50 nav-item"
						:to="n.link"
						>{{ n.name }}
          </NuxtLink>
				</template>

        <template v-if="!user" key="menuItemLogin">
          <NuxtLink
              class="px-3 py-2 text-sm font-medium text-slate-200 transition-all rounded-lg link hover:text-primary hover:bg-primary-50"
              to="/login"
          >Login</NuxtLink>
        </template>
			</nav>

      <button v-if="currentUser && user"
              key="menuItemUser"
              class="px-3 py-2 text-sm font-medium text-slate-200 transition-all rounded-lg link hover:text-primary hover:bg-primary-50"
      > {{ currentUser.username }} </button>

      <button
          v-if="user"
          @click="logOut"
          key="menuItemLogOut"
          class="px-3 py-2 text-sm font-medium text-slate-200 transition-all rounded-lg link hover:text-primary hover:bg-primary-50"
      >Log Out</button>

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
  .logo{
    width:60px;
    height:60px;
    margin-left: 20px
  }

  .nav-item {
    margin-left: 5px;
    margin-right: 5px;
  }

  .icon {
    width: 50px;
    height: 50px;
  }
</style>