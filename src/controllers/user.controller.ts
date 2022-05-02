import { Response } from "express";
import prisma from "../config/prisma";
import { GetUserRequest, UpdateUserRequest } from "../interfaces/user";

export const getUser = async (req: GetUserRequest, res: Response) => {
  const {
    user: { id },
  } = req.body;

  const userFound = await prisma.user.findUnique({ where: { id } });

  if (!userFound)
    return res.status(400).json({
      error: { message: "No existe una cuenta" },
    });

  return res.json(userFound);
};

export const updateUser = async (req: UpdateUserRequest, res: Response) => {
  const {
    firstname,
    lastname,
    phone,
    user: { id },
  } = req.body;

  const userFound = await prisma.user.findUnique({ where: { id } });

  if (!userFound)
    return res.status(400).json({
      error: { message: "No existe una cuenta" },
    });

  try {
    const updatedUser = await prisma.user.update({
      where: { id },
      data: {
        firstname,
        lastname,
        phone,
      },
    });
    return res.json(updatedUser);
  } catch (error) {
    console.log(error);
    return res.status(503).json({
      error: { message: "Ocurrió un error interno" },
    });
  }
};
