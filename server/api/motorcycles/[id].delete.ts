import MotorcycleModel from "~/server/models/Motorcycle.model";
import AppointmentModel from "~/server/models/Appointment.model";

export default defineEventHandler(async (event) => {
    // Get id from params
    const id = event.context.params.id;

    // Remove motorcycle
    try {
        await MotorcycleModel.findByIdAndDelete(id);
        await AppointmentModel.deleteMany({motorcycle: id})
        return { message: "Motorcycle removed" };
    } catch (e) {
        throw createError({
            message: e.message,
        });
    }
});