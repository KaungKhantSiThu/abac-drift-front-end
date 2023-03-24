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
        async create(motorcycles: IMotorcycle) {
			await $fetch("/api/motorcycles/create", {
				method: "POST",
				body: motorcycles,
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
		async update(id: string, motorcycles: IMotorcycle) {
			await $fetch(`/api/motorcycles/${id}`, {
				method: "PUT",
				body: motorcycles,
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
    }

})