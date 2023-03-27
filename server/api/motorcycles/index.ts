import MotorcycleModel from "~/server/models/Motorcycle.model";
export default defineEventHandler(async (event) => {

    return MotorcycleModel.find();
});