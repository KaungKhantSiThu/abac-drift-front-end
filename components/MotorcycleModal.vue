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
                                <DialogTitle class="text-xl fs-1 text-gray-700">{{ motorcycle._id ? "Update" :
                                    "Add" }} Motorcycle</DialogTitle>
                            </div>
                            <p class="mt-3 fs-6 text-gray-500">
                                {{ motorcycle._id ? "Update this motorcycle" : "List your motorcycle" }}
                            </p>

                            <form @submit="submitMotorcycle" class="mt-4">
                                <div class="grid grid-cols-1 gap-4 ">
                                    <div class="row">
                                        <div class="col">
                                            <FormInput placeholder="Enter model" rules="required" label="Model" type="text"
                                                name="title" />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">

                                            <FormInput placeholder="Enter gear" rules="required" label="Gear" type="text"
                                                name="gear" />
                                        </div>

                                        <div class="col">
                                            <FormInput placeholder="Enter mileage" rules="required" label="Mileage"
                                                type="number" name="mileage" />
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col">
                                            <FormInput placeholder="Enter price" rules="required" label="Price"
                                                type="number" name="price" />
                                        </div>
                                        <div class="col">
                                            <FormInput placeholder="Enter engine" rules="required" label="Engine"
                                                type="number" name="engine" />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <FormInput placeholder="Enter year" rules="required" label="Year" type="text"
                                                name="year" />
                                        </div>
                                        <div class="col">
                                            <FormInput placeholder="Enter manufacturer" rules="required"
                                                label="Manufacturer" type="text" name="manufacturer" />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">

                                    <FormInput placeholder="Enter description" rules="required" label="Description"
                                        type="text" name="description" />
                                    </div>
                                    </div>

                                    <DropFile v-if="motorcycle._id === undefined" @bindFiles="handleImageFiles" />
            
                                </div>
                                <!-- Form buttons -->
                                <div class="flex items-center justify-end space-x-3 mt-1">
                                    <button @click="closeModal()" type="button"
                                        class="px-4 text-sm bg-gray-100 py-2.5 rounded-md">
                                        Cancel
                                    </button>
                                    <button type="submit" class="btn text-white" style="width:90px; height:40px; padding:5px;">{{ motorcycle._id ? "Update" : "Create" }}</button>
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

const client = useSupabaseClient();

const user = useSupabaseUser();

// Get function used to handle form submission and set init form values
const { handleSubmit } = useForm({
    initialValues: motorcycle,
});

const imageFiles = ref({});

const handleImageFiles = (f) => {
    imageFiles.value = f
}

// Function used to update or create the record
const submitMotorcycle = handleSubmit(async (values, ctx) => {
    if (!motorcycle.value._id) {
        // create motorcycle
        //console.log(values)
        let count = 0
        let imageURLs = []
        imageFiles.value.forEach((imageFile) => {
            console.log(imageFile)
            const { data, error } = client.storage
                .from('motorcycles')
                .upload(`${values.title}/image${count}`, imageFile)

            const { data: url } = client.storage
                .from('motorcycles')
                .getPublicUrl(`${values.title}/image${count}`)
            imageURLs.push(url.publicUrl)

            count++;

        })
        await motorcycleStore.create({ ...values, imageURLs: imageURLs, seller: user.value.email })
        closeModal();
    } else {
        // Updated motorcycle
        console.log(values)
        await motorcycleStore.update(motorcycle.value._id, { ...values, imageURLs: motorcycle.value.imageURLs, seller: motorcycle.value.seller });
        closeModal();
        this.$nuxt.refresh();
    }
});

// Control open/close state of modal
const open = ref(false);
const openModal = (item) => {
    console.log('testing update modal')
    console.log(item)
    // Set init values if an object is passed
    if (item) {
        motorcycle.value = JSON.parse(JSON.stringify(item));
    }
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

<style>
.bg-gray-100{
    border-color: black;
}

</style>
