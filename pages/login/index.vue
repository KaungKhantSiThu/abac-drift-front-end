<script setup lang="ts">

// defineI18nRoute({
//   locales: ['en']
// })
const email = ref('')
const password = ref('')
const type = ref('')
const name = ref('')
const phoneNumber = ref('')
const isSignUp = ref(false)
const user = useSupabaseUser()
const client = useSupabaseAuthClient()
const signUp = async () => {
  const { error } = await client.auth.signUp({
    email: email.value,
    password: password.value,
    options: {
      data: {
        type: type.value
      }
    }
  })
  console.log('user', user)
  console.log('error', error)
}

const onSignUp = () => {
  navigateTo('/login')
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

<template>
  <div class="max-w-lg mx-auto mt-8">
    <form
        @submit.prevent="() => (isSignUp ? signUp() : login())"
        class="flex flex-col gap-2 mt-16"
    >

      <input
          v-if="isSignUp"
          type="text"
          placeholder="Name"
          v-model="name"
          class="p-2 text-black rounded bg-charcoal-600"
      />

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

      <input
          v-if="isSignUp"
          type="tel"
          placeholder="Phone Number"
          v-model="phoneNumber"
          class="p-2 text-black rounded bg-charcoal-600"
      />

      <div v-if="isSignUp">
        <input type="radio" id="buyer" name="user_type" value="buyer" v-model="type">
        <label for="buyer">Buyer</label>
        <input type="radio" id="seller" name="user_type" value="seller" v-model="type">
        <label for="seller">Seller</label>
      </div>

      <button
          type="submit"
          class="p-2 font-medium text-white bg-green-500 rounded hover:bg-green-400"
          @click="onSignUp"
      >
        <span v-if="isSignUp"> Sign up </span>
        <span v-else> Log in </span>
      </button>
    </form>
    <button
        @click="isSignUp = !isSignUp"
        class="w-full mt-8 text-sm text-center underline text-slate-300"
    >
      <span v-if="isSignUp"> Have an account? Log in instead </span>
      <span v-else> Create a new account </span>
    </button>
  </div>
</template>