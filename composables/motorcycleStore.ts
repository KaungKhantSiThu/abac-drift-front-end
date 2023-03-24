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
        }
    }

})