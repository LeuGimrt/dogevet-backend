import { Response } from "express";
import prisma from "../config/prisma";
import { NewConsultRequest } from "../interfaces/consult";

export const newConsult = async (req: NewConsultRequest, res: Response) => {
  const {
    pet_id,
    symptoms,
    medicine,
    cost,
    x_ray_img,
    user: { id },
  } = req.body;

  try {
    const newConsult = await prisma.consultation.create({
      data: {
        cost,
        medicine,
        symptoms,
        x_ray_img,
        pet_id,
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
