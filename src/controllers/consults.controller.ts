import { RequestHandler } from "express";
import prisma from "../config/prisma";

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
