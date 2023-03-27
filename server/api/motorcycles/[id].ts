import MotorcycleModel from "~/server/models/Motorcycle.model";
export default defineEventHandler(async (event) => {
    const { id } = event.context.params;
    return MotorcycleModel.findById(id).exec();
});