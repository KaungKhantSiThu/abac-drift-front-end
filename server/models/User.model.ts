import mongoose from "mongoose";
const { Schema } = mongoose

const schema = new Schema(
    {
        username: String,
        email: String,
        bio: String,
        phoneNumber: String,
        dob: Date,
        type: {
                type: String,
                enum : ['buyer','seller'],
                default: 'buyer'
        },
        appointments: [String],
    }, {timestamps: true}
);

export default mongoose.model("User", schema, "users");