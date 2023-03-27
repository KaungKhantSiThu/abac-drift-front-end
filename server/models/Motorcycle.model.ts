import mongoose from "mongoose";
const { Schema } = mongoose

const schema = new Schema(
    {
        title: String,
        price: Number,
        gear: String,
        mileage: Number,
        engine: Number,
        year: String,
        manufacturer: String,
        imageURLs: [String],
        seller: String,
        description: String
    }
);

export default mongoose.model("Motorcycle", schema, "motorcycles");