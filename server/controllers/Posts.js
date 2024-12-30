import Posts from '../models/Posts.js';
import * as dotenv from 'dotenv';
import { createError } from '../error.js';
import {v2 as cloudinary} from "cloudinary";

dotenv.config();

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_SECRET_KEY
});

export const getAllPosts = async (req, res, next) => {
    try{
        const posts = await Posts.find({});
        return res.status(200).json({success: true, data: posts})
    }
    catch(error){
        next(createError(error.status, error?.response?.data?.error?.message || error?.message));
    }
}

export const createPost = async (req, res, next) => {
    try{
        const {author, prompt, photo} = req.body;
        const photoUrl = await cloudinary.uploader.upload(photo);
        const newPost = await Posts.create({
            author, prompt, photo: photoUrl?.secure_url
        });
        return res.status(201).json({success: true, data: newPost});
    }
    catch(error){
        next(createError(error.status, error?.response?.data?.error?.message || error?.message));
    }
}
