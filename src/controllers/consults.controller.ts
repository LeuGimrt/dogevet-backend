import { RequestHandler } from "express";
import prisma from "../config/prisma";
import { v2 as cloudinary } from "cloudinary";
import env from "../config/env";

cloudinary.config({
  cloud_name: env.CLOUD_NAME,
  api_key: env.CLOUDINARY_API_KEY,
  api_secret: env.CLOUDINARY_API_SECRET,
});

export const newConsult: RequestHandler = async (req, res) => {
  const {
    dogId,
    symptoms,
    blood_test,
    medicine,
    cost,
    x_ray_img,
    user: { id },
  } = req.body;

  try {
    const newConsult = await prisma.consultation.create({
      data: {
        blood_test,
        cost: parseFloat(cost),
        medicine,
        symptoms,
        x_ray_img,
        dog_id: String(dogId),
        registered_by_id: id,
      },
    });

    return res.json(newConsult);
  } catch (error) {
    return res.status(503).json({
      error: { message: "No se logró guardar la información" },
    });
  }
};
