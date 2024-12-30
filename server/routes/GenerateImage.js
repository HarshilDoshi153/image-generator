import express from 'express';
import { GenerateImage } from '../controllers/GenerateImage.js';

const router = express.Router();

router.post("/", GenerateImage);

export default router;