import AppointmentModel from "~/server/models/Appointment.model";
export default defineEventHandler(async (event) => {
    return AppointmentModel.find().populate('motorcycle');
});