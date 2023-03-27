import MotorcycleModel from "~/server/models/Motorcycle.model";
import { MotorcycleSchema } from "~~/server/validation";

export default defineEventHandler(async (event) => {
    // Get data form body
    const body = await readBody(event);
    // get id from params
    const id = event.context.params.id;

    // validate
    let { error } = MotorcycleSchema.validate(body, { abortEarly: true, allowUnknown: true });
    if (error) {
        throw createError({
            message: error.message.replace(/"/g, ""),
            statusCode: 400,
            fatal: false,
        });
    }

    // Update motorcycle
    try {
        await MotorcycleModel.findByIdAndUpdate(id, body);
        return { message: "Motorcycle updated" };
    } catch (e) {
        throw createError({
            message: e.message,
        });
    }
});