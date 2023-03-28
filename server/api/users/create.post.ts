import UserModel from "~/server/models/User.model";
import {readBody} from "h3";
import {UserSchema} from "~/server/validation";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    let { error } = UserSchema.validate(body);

    if (error) {
        throw createError({
            message: error.message.replace(/"/g, ""),
            statusCode: 400,
            fatal: false,
        })
    }

    try {
        await UserModel.create(body);
    } catch (e) {
        throw createError({message: e.message})
    }
})