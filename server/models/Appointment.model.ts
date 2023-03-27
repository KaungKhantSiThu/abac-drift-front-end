import mongoose from "mongoose";
const { Schema } = mongoose

const schema = new Schema(
    {
        datetime: Date,
        seller: String,
        buyer: String,
        status: String,
        location: String,
        note: String,
        motorcycle: {
            type: Schema.Types.ObjectId,
            ref: 'Motorcycle'
        }
    }
);
export default mongoose.model("Appointment", schema, "appointments");