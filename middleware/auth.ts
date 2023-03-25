export default defineNuxtRouteMiddleware((to) => {
    const user = useSupabaseUser()

    if (!user.value) {
        navigateTo('/login')
    } else if (user.value) {
        navigateTo(to.path)
    }
})