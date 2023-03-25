import { defineStore } from "pinia";
import { IAppointment } from "~~/types";
import useToast from "./useToast";

export const useAppointmentStore = defineStore("appointment-store", {
    state: () => ({
        appointments: [] as IAppointment[]
    }),

    actions: {
        async getAll() {
            try {
                let data = await $fetch<IAppointment[]>("/api/appointments");
                this.appointments = data;
                return data as IAppointment[];
            } catch (e) {
                useToast().error(e.message);
            }
        }
    }

})