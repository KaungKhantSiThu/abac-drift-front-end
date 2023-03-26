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
                                <DialogTitle class="text-xl font-medium text-gray-700">{{ motorcycle._id ? "Update" :
                                    "Create" }} Motorcycle</DialogTitle>
                            </div>
                            <p class="mt-1 text-sm text-gray-500">
                                {{ motorcycle._id ? "Update this motorcycle" : "Add a new motorcycle here" }}
                            </p>

                            <form @submit="submitMotorcycle" class="mt-5">
                                <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <div class="col-span-full">
                                        <FormInput v-model="motorcycle.title" placeholder="Enter Brand" rules="required"
                                            label="Motorcycle Brand" type="text" name="title" />
                                        <FormInput v-model="motorcycle.gear" placeholder="Enter Gear" rules="required"
                                            label="Motorcycle Gear" type="text" name="gear" />

                                        <FormInput v-model="motorcycle.mileage" placeholder="Enter  mileage"
                                            rules="required" label="Motorcycle  mileage" type="number" name=" mileage" />
                                        <FormInput v-model="motorcycle.price" placeholder="Enter Price" rules="required"
                                            label="Motorcycle Price" type="number" name="price" />

                                        <FormInput v-model="motorcycle.engine" placeholder="Enter Engine" rules="required"
                                            label="Motorcycle Engine" type="number" name="engine" />

                                        <FormInput v-model="motorcycle.year" placeholder="Enter Year" rules="required"
                                            label="Motorcycle Year" type="number" name="year" />

                                        <FormInput v-model="motorcycle.manufacturer" placeholder="Enter Manufacturer"
                                            rules="required" label="Motorcycle Manufacturer" type="string"
                                            name="manufacturer" />

                                        <FormInput v-model="motorcycle.imageURL" action="{Formeezy-Endpoint}" method="POST" enctype="multipart/form-data"
                                            type="file" name="my-file" label="Motorcycle  Picture" />
                                    </div>
                                </div>
                                <!-- Form buttons -->
                                <div class="flex items-center justify-end space-x-3 mt-7">
                                    <button @click="closeModal()" type="button"
                                        class="px-4 text-sm bg-gray-100 py-2.5 rounded-md">
                                        Cancel
                                    </button>
                                    <button type="submit" class="btn">{{ motorcycle._id ? "Update" : "Create" }}</button>
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

// instantiate author store
const motorcycleStore = useMotorcycleStore();
//Initial form value
const motorcycle = ref({});

// Get function used to handle form submission and set init form values
const { handleSubmit } = useForm({
    initialValues: motorcycle,
});

// Function used to update or create the record
const submitMotorcycle = handleSubmit(async (values, ctx) => {
    if (!motorcycle.value._id) {
        // create author
        await motorcycleStore.create(values.title);
        await motorcycleStore.create(values.gear);
        await motorcycleStore.create(values.mileage);
        await motorcycleStore.create(values.price);
        await motorcycleStore.create(values.engine);
        await motorcycleStore.create(values.year);
        await motorcycleStore.create(values.manufacturer);
        closeModal();
    } else {
        // Updated author
        motorcycleStore.update(motorcycle.value._id, values.title, values.gear, values.mileage, values.price, values.engine, values.year, values.manufacturer);
        closeModal();
    }
});

// Control open/close state of modal
const open = ref(false);
const openModal = (item) => {
    // Set init values if an object is passed
    if (item) motorcycle.value = JSON.parse(JSON.stringify(item));
    open.value = true;
};
const closeModal = () => {
    motorcycle.value = {};
    open.value = false;
};

// Expose these methods to parent components
defineExpose({
    openModal,
    closeModal,
});
</script>

<style></style>
