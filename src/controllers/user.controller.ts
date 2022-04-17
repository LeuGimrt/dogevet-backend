import { RequestHandler } from "express";
import prisma from "../config/prisma";

export const getUser: RequestHandler = async (req, res) => {
  const {
    user: { id },
  } = req.body;

  const userFound = await prisma.user.findUnique({ where: { id } });

  if (!userFound)
    return res.status(400).json({
      error: { message: "No existe una cuenta" },
    });

  res.json(userFound);
};

export const updateUser: RequestHandler = async (req, res) => {
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
    res.json(updatedUser);
  } catch (error) {
    console.log(error);
    return res.status(503).json({
      error: { message: "Ocurrió un error interno" },
    });
  }
};
