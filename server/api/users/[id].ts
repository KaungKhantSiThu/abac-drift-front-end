import UserModel from "~/server/models/User.model";
export default defineEventHandler(async (event) => {
    const { id } = event.context.params;
    return UserModel.findById(id).exec();
});