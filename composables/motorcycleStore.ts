import { defineStore } from "pinia";
import { IMotorcycle } from "~~/types";
import useToast from "./useToast";

export const useMotorcycleStore = defineStore("motorcycle-store", {
    state: () => ({
        motorcycles: [] as IMotorcycle[],
		API_URL: useRuntimeConfig().public.API_URL

    }),

    actions: {
        async getAll() {
            try {
                let data = await $fetch<IMotorcycle[]>(`${this.API_URL}/motorcycles`);

                this.motorcycles = data;
                return data as IMotorcycle[];
            } catch (e) {
                useToast().error(e.message);
            }
        },

		async getById(id: string) {
			try {
				let data = await $fetch<IMotorcycle>(`${this.API_URL}/motorcycles/${id}`);
				return data as IMotorcycle;
			} catch (e) {
				useToast().error(e.message);
			}
		},
        // Create a new motorcycle
        async create(motorcycle: IMotorcycle) {

			await $fetch(`${this.API_URL}/motorcycles/create`, {
				method: "POST",
				body: motorcycle,
			})
				.catch((e) => {
					//useToast().error(e.data.message);
				})
				.then(async () => {
					await this.getAll();
					useToast().success("Motorcycle added");
				});
		},
        // Update motorcycle information
		async update(id: string, motorcycle: IMotorcycle) {
			await $fetch(`${this.API_URL}/motorcycles/${id}`, {
				method: "PUT",
				body: motorcycle,
			})
				.catch((e) => {
					//useToast().error(e.data.message);
				})
				.then(async () => {
					await this.getAll();
					useToast().success("Motorcycle information updated");
				});
		},
        // delete a motorcycle
		async remove(id: string) {
			await $fetch(`${this.API_URL}/motorcycles/${id}`, {
				method: "DELETE",
			})
				.catch((e) => {
					//useToast().error(e.data.message);
				})
				.then(async () => {
					await this.getAll();
					useToast().success("Motorcycle removed");
				});
		},
    },

	getters: {
		getMotorcycleByEmail: (state) => {
			return (email) => state.motorcycles.filter((motorcycle) => motorcycle.seller === email)
		}
	}

})