import mongoose from "mongoose";

const { Schema } = mongoose;

const ot = new Schema(
    {
        date:String,
        shift:String,
        purpose:String,
        route:String,
        status:String,
        reason:String
    }

);

export const Ot = mongoose.model("ot",ot );