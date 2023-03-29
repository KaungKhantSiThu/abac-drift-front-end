import { defineStore } from "pinia";
import { IUser } from "~~/types";
import useToast from "./useToast";

export const useUserStore = defineStore("user-store", {
    state: () => ({
        users: [] as IUser[],
        API_URL: useRuntimeConfig().public.API_URL
    }),

    actions: {
        async getAll() {
            try {
                let data = await $fetch<IUser[]>(`${this.API_URL}/users`);
                this.users = data;
                return data as IUser[];
            } catch (e) {
                useToast().error(e.message);
            }
        },

        async getById(id: string) {
            try {
                let data = await $fetch<IUser>(`${this.API_URL}/users/${id}`);
                return data as IUser;
            } catch (e) {
                useToast().error(e.message);
            }
        },

        async getByEmail(email: string) {
            try {
                let data = await $fetch<IUser>(`${this.API_URL}/users/${email}`);
                return data as IUser;
            } catch (e) {
                useToast().error(e.message);
            }
        },
        // Create a new motorcycle
        async create(user: IUser) {
            await $fetch(`${this.API_URL}/users/create`, {
                method: "POST",
                body: user,
            })
                .catch((e) => {
                    useToast().error(e.data.message);
                })
                .then(async () => {
                    await this.getAll();
                    useToast().success("User added");
                });
        },
    },

    getters: {
        getUserByEmail: (state) => {
            return (email) => state.users.filter((user) => user.email === email)
        },

        contains: (state) => {
            return (email) => state.users.some((user) => user.email === email )
        }
    }

})