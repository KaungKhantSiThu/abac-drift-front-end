import AppointmentModel from "~/server/models/Appointment.model";
import {readBody} from "h3";
import {AppointmentSchema} from "~/server/validation";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    let { error } = AppointmentSchema.validate(body);
    if (error) {
        throw createError({
            message: error.message.replace(/"/g, ""),
            statusCode: 400,
            fatal: false,
        })
    }

    try {
        await AppointmentModel.create(body);
    } catch (e) {
        throw createError({message: e.message})
    }
})