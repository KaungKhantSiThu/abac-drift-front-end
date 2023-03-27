import { defineStore } from "pinia";
import { IMotorcycle } from "~~/types";
import useToast from "./useToast";

export const useMotorcycleStore = defineStore("motorcycle-store", {
    state: () => ({
        motorcycles: [] as IMotorcycle[]
    }),

    actions: {
        async getAll() {
            try {
                let data = await $fetch<IMotorcycle[]>("/api/motorcycles");
                this.motorcycles = data;
                return data as IMotorcycle[];
            } catch (e) {
                useToast().error(e.message);
            }
        },
        // Create a new motorcycle
        async create(motorcycle: IMotorcycle) {
			await $fetch("/api/motorcycles/create", {
				method: "POST",
				body: motorcycle,
			})
				.catch((e) => {
					useToast().error(e.data.message);
				})
				.then(async () => {
					await this.getAll();
					useToast().success("Motorcycle added");
				});
		},
        // Update motorcycle information
		async update(id: string, motorcycle: IMotorcycle) {
			await $fetch(`/api/motorcycles/${id}`, {
				method: "PUT",
				body: motorcycle,
			})
				.catch((e) => {
					useToast().error(e.data.message);
				})
				.then(async () => {
					await this.getAll();
					useToast().success("Motorcycle information updated");
				});
		},
        // delete a motorcycle
		async remove(id: string) {
			await $fetch(`/api/motorcycles/${id}`, {
				method: "DELETE",
			})
				.catch((e) => {
					useToast().error(e.data.message);
				})
				.then(async () => {
					await this.getAll();
					useToast().success("Motorcycle removed");
				});
		},
    },

	getters: {
		getMotorcycleById: (state) => {
			return (motorcycleId) => state.motorcycles.find((motorcycle) => motorcycle._id === motorcycleId)
		},

		getMotorcycleByEmail: (state) => {
			return (email) => state.motorcycles.filter((motorcycle) => motorcycle.seller === email)
		}
	}

})