import AppointmentModel from "~/server/models/Appointment.model";
export default defineEventHandler(async (event) => {
    const { id } = event.context.params;
    return AppointmentModel.findById(id).populate('motorcycle').exec();
});