import AppointmentModel from "~/server/models/Appointment.model";

export default defineEventHandler(async (event) => {
    // Get id from params
    const id = event.context.params.id;

    // Remove appointment
    try {
        await AppointmentModel.findByIdAndDelete(id);
        return { message: "Appointment removed" };
    } catch (e) {
        throw createError({
            message: e.message,
        });
    }
});