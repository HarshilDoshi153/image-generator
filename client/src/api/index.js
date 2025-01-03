import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8080/api/",
})

export const GetPosts = async () => await API.get("/post/");
export const CreatePosts = async (data) => await API.post("/post/", data);
export const GenerateImage = async (data) => await API.post("/generateImage/", data);

