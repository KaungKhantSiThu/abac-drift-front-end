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
        },

        async getById(id: string) {
            try {
                let data = await $fetch<IAppointment>(`/api/appointments/${id}`);
                return data as IAppointment;
            } catch (e) {
                useToast().error(e.message);
            }
        },

        // Create a new appointment
        async create(appointment: IAppointment) {
            await $fetch("/api/appointments/create", {
                method: "POST",
                body: appointment,
            })
                .catch((e) => {
                    useToast().error(e.data.message);
                })
                .then(async () => {
                    await this.getAll();
                    useToast().success("Appointment added");
                });
        },
        // Update appointment information
        async update(id: string, appointment: IAppointment) {
            await $fetch(`/api/appointments/${id}`, {
                method: "PUT",
                body: appointment,
            })
                .catch((e) => {
                    useToast().error(e.data.message);
                })
                .then(async () => {
                    await this.getAll();
                    useToast().success("Appointment updated");
                });
        },
        // delete an appointment
        async remove(id: string) {
            await $fetch(`/api/appointments/${id}`, {
                method: "DELETE",
            })
                .catch((e) => {
                    useToast().error(e.data.message);
                })
                .then(async () => {
                    await this.getAll();
                    useToast().success("Appointment removed");
                });
        },
    },

    getters: {
        getAppointmentById: (state) => {
            return (appointmentId) => state.appointments.find((appointment) => appointment._id === appointmentId)
        },

        getAppointmentByEmail: (state) => {
            return (email) => state.appointments.filter((appointment) => (appointment.seller === email || appointment.buyer === email))
        }
    }

})