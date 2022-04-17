import { RequestHandler } from "express";
import prisma from "../config/prisma";

export const newDog: RequestHandler = async (req, res) => {
  const {
    name,
    b_date,
    breed,
    gender,
    img,
    user: { id },
  } = req.body;

  try {
    const newDog = await prisma.dog.create({
      data: {
        b_date: new Date(b_date),
        breed,
        gender: parseInt(gender),
        img,
        name,
        registered_by_id: String(id),
      },
    });
    return res.json(newDog);
  } catch (error) {
    console.log(error);

    return res.status(503).json({
      error: { message: "No se logró guardar la información" },
    });
  }
};

export const searchDog: RequestHandler = async (req, res) => {
  const { name } = req.params;

  try {
    const dogsFound = await prisma.dog.findMany({
      where: { name: { contains: name } },
    });
    return res.json(dogsFound);
  } catch (error) {
    return res
      .status(503)
      .json({ error: { message: "Ocurrió un error interno" } });
  }
};

export const getDogs: RequestHandler = async (req, res) => {
  const { user } = req.body;

  try {
    const dogsFound = await prisma.dog.findMany({
      where: { registered_by_id: user.id },
    });
    return res.json(dogsFound);
  } catch (error) {
    return res
      .status(503)
      .json({ error: { message: "Ocurrió un error interno" } });
  }
};

export const getAllDogs: RequestHandler = async (req, res) => {
  const { user } = req.body;

  console.log("siono");

  try {
    const dogsFound = await prisma.dog.findMany();

    console.log(dogsFound);

    return res.json(dogsFound);
  } catch (error) {
    return res
      .status(503)
      .json({ error: { message: "Ocurrió un error interno" } });
  }
};

export const dogDetails: RequestHandler = async (req, res) => {
  const { dogId } = req.params;

  try {
    const dogDetails = await prisma.dog.findUnique({
      where: { id: String(dogId) },
      include: {
        consultations: {
          include: {
            registered_by: true,
          },
        },
      },
    });
    return res.json(dogDetails);
  } catch (error) {
    return res
      .status(500)
      .json({ error: { message: "Ocurrió un error interno" } });
  }
};
