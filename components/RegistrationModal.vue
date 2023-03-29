<template>
  <TransitionRoot :show="open">
    <!-- Dialog -->
    <Dialog as="div" class="relative z-20" @close="closeModal">
      <!-- Dialog overlay -->
      <TransitionChild enter="duration-200" leave="duration-200" enter-from="opacity-0" leave-to="opacity-0">
        <div class="fixed inset-0 bg-black/30 backdrop-blur" />
      </TransitionChild>

      <!-- Full-screen scrollable container -->
      <div class="fixed inset-0 overflow-y-auto">
        <!-- Container to center the panel -->
        <div class="flex items-center justify-center min-h-full p-4">
          <!-- The actual dialog panel -->
          <TransitionChild enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                           enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                           leave-to="opacity-0 scale-95">
            <DialogPanel class="w-full min-w-[360px] p-5 bg-white shadow-lg rounded-2xl">
              <div class="flex items-center justify-between">
                <!-- Conditional rendering for text -->
                <DialogTitle class="text-xl font-medium text-gray-700">{{ userObject._id ? "Update" :
                    "Create" }} Registration</DialogTitle>
              </div>
<!--              <p class="mt-1 text-sm text-gray-500">-->
<!--                {{ userObject._id ? "Update the user" : "Register a new user" }}-->
<!--              </p>-->

              <form @submit="submitUser" class="mt-5">
                <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div class="col-span-full">
                    <FormInput placeholder="Enter Full Name" rules="required"
                               label="Name" type="text" name="username" />

                    <FormInput placeholder="Enter Email" rules="required"
                               label="Email" type="email" name="email" />

                    <FormInput placeholder="Enter  Password"
                               rules="required" label="Password" type="password" name="password" />

                    <FormInput placeholder="Enter Date of Birth" rules="required"
                               label="Date of Birth" type="date" name="dob"/>

                    <FormInput placeholder="Enter Bio"
                               label="Bio" type="text" name="bio" />

                    <div class="form-check">
                      <input class="form-check-input" type="radio" id="buyer" v-model="type" value="buyer">
                      <label class="form-check-label" for="buyer">
                        buyer
                      </label>
                    </div>

                    <div class="form-check">
                      <input class="form-check-input" type="radio" id="seller" v-model="type" value="seller">
                      <label class="form-check-label" for="seller">
                        seller
                      </label>
                    </div>

                    <FormInput placeholder="Enter Phone Number" rules="required"
                               label="Phone Number" type="tel" name="phoneNumber" />


                  </div>
                </div>
                <!-- Form buttons -->
                <div class="flex items-center justify-end space-x-3 mt-7">
                  <button @click="closeModal()" type="button"
                          class="px-4 text-sm bg-gray-100 py-2.5 rounded-md">
                    Cancel
                  </button>
                  <button  type="submit" class="btn">{{ userObject._id ? "Update" : "Create" }}</button>
                </div>
              </form>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionRoot,
  TransitionChild,
} from "@headlessui/vue";
import { useForm } from "vee-validate";
import {useUserStore} from "~/composables/userStore";
import useToast from "~/composables/useToast";

// instantiate author store
const userStore = useUserStore();
//Initial form value
const userObject = ref({});

const type = ref('buyer');

const client = useSupabaseAuthClient();


// Get function used to handle form submission and set init form values
const { handleSubmit } = useForm({
  initialValues: userObject,
});

useAsyncData(async () => await userStore.getAll(), {
  initialCache: false,
});

// Function used to update or create the record
const submitUser = handleSubmit(async (values, ctx) => {
  if (!userStore.contains(values.email)) {
    const { error: signUpError } = await client.auth.signUp({
      email: values.email,
      password: values.password,
    })
    console.log(signUpError)
    delete values.password
    values['dob'] = new Date(values.dob)
    await userStore.create({...values, type: type.value})
    useToast().success("Please check your email for the confirmation link");
    closeModal();
  } else {
    useToast().warning("The email is already in use")
    console.log("The email already exists. Use another one")
  }
});

// Control open/close state of modal
const open = ref(false);
const openModal = (item) => {
  console.log('testing registration')
  console.log(item)
  // Set init values if an object is passed
  if (item) {
    userObject.value = JSON.parse(JSON.stringify(item));
  }
  open.value = true;
};
const closeModal = () => {
  userObject.value = {};
  open.value = false;
};

// Expose these methods to parent components
defineExpose({
  openModal,
  closeModal,
});
</script>

<style></style>
