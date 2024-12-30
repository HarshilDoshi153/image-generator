import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    prompt: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
})

const Posts = mongoose.model("Posts", PostSchema);

export default Posts;