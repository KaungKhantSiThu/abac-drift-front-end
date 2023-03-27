import AppointmentModel from "~/server/models/Appointment.model";
import {AppointmentSchema} from "~/server/validation";

export default defineEventHandler(async (event) => {
    // Get data form body
    const body = await readBody(event);
    // get id from params
    const id = event.context.params.id;

    // validate
    let { error } = AppointmentSchema.validate(body, { abortEarly: true, allowUnknown: true });
    if (error) {
        throw createError({
            message: error.message.replace(/"/g, ""),
            statusCode: 400,
            fatal: false,
        });
    }

    // Update appointment
    try {
        await AppointmentModel.findByIdAndUpdate(id, body);
        return { message: "Appointment updated" };
    } catch (e) {
        throw createError({
            message: e.message,
        });
    }
});