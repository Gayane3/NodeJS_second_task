import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
},
    {
        versionKey: false
    });

export default mongoose.model("Book", bookSchema);