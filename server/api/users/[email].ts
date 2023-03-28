import UserModel from "~/server/models/User.model";
export default defineEventHandler(async (event) => {
    const { email } = event.context.params;
    return UserModel.findOne({email: email}).exec();
});