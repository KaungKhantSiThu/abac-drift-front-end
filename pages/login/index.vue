<template>
 
    <div class="row  justify-content-center align-items-center mt-5">
      <div class="col-xl-5">
        <div class="card" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">
            <div class="max-w-lg mx-auto ">
              <h2>
                Sign in
              </h2>
              <form @submit.prevent="login" class="flex flex-col gap-2 mt-10">

                <input type="email" placeholder="Email" v-model="email" class="p-2 text-black rounded bg-charcoal-600" />

                <input type="password" placeholder="Password" v-model="password"
                  class="p-2 text-black rounded bg-charcoal-600" />

                <button type="submit" class="btn p-2 font-medium text-white  rounded hover:bg-green-400 mt-6">
                  Log in
                </button>
              </form>
              <button @click="registrationModal.openModal()" class="w-full mt-8 text-sm text-center underline ">
                Register
              </button>


              <RegistrationModal ref="registrationModal" />
            </div>
          </div>
        </div>
      </div>
    </div>
 
</template>

<script setup lang="ts">

import { useUserStore } from "~/composables/userStore";


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
<style></style>