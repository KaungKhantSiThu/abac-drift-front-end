import MotorcycleModel from "~/server/models/Motorcycle.model";
import {readBody} from "h3";
import {MotorcycleSchema} from "~/server/validation";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    let { error } = MotorcycleSchema.validate(body);

    if (error) {
        throw createError({
            message: error.message.replace(/"/g, ""),
            statusCode: 400,
            fatal: false,
        })
    }

    try {
        await MotorcycleModel.create(body);
    } catch (e) {
        throw createError({message: e.message})
    }
})