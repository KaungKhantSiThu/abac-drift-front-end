import MotorcycleModel from "~/server/models/Motorcycle.model";
import {readBody} from "h3";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    try {
        await MotorcycleModel.create(body);
    } catch (e) {
        throw createError({message: e.message})
    }
})