<template>
  <div class="max-w-lg mx-auto mt-8">
    <form
        @submit.prevent="login"
        class="flex flex-col gap-2 mt-16"
    >

      <input
          type="email"
          placeholder="Email"
          v-model="email"
          class="p-2 text-black rounded bg-charcoal-600"
      />

      <input
          type="password"
          placeholder="Password"
          v-model="password"
          class="p-2 text-black rounded bg-charcoal-600"
      />

      <button
          type="submit"
          class="p-2 font-medium text-white bg-green-500 rounded hover:bg-green-400"
      >
        Log in
      </button>
    </form>
    <button
        @click="registrationModal.openModal()"
        class="w-full mt-8 text-sm text-center underline text-slate-300"
    >
      Create a new account
    </button>

    <RegistrationModal ref="registrationModal" />
  </div>
</template>

<script setup lang="ts">

import {useUserStore} from "~/composables/userStore";


const email = ref('')
const password = ref('')
const name = ref('')
const user = useSupabaseUser()
const userStore = useUserStore();
const client = useSupabaseAuthClient()

const registrationModal = ref();
const signUp = async () => {
  const { error } = await client.auth.signUp({
    email: email.value,
    password: password.value
  })
  console.log('user', user)
  console.log('error', error)
}
const login = async () => {
  const { error } = await client.auth.signInWithPassword({
    email: email.value,
    password: password.value
  })
  console.log('user', user)
  console.log('error', error)
}

onMounted(() => {
  watchEffect(() => {
    if (user.value) {
      navigateTo('/')
    } else {
      navigateTo('/login')
    }
  })
})
</script>