import { Sex } from "@prisma/client";
import { Request, Response } from "express";
import prisma from "../config/prisma";
import {
  DogDetailsRequest,
  GetDogsRequest,
  NewDogRequest,
  SearchDogRequest,
} from "../interfaces/dog";

export const newDog = async (req: NewDogRequest, res: Response) => {
  const {
    name,
    b_date,
    type,
    sex,
    img,
    user: { id },
  } = req.body;

  try {
    const newDog = await prisma.pet.create({
      data: {
        b_date: new Date(b_date),
        type,
        sex: sex === "M" ? Sex.MALE : Sex.FEMALE,
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

export const searchDog = async (req: SearchDogRequest, res: Response) => {
  const { name } = req.params;

  try {
    const dogsFound = await prisma.pet.findMany({
      where: { name: { contains: name } },
    });
    return res.json(dogsFound);
  } catch (error) {
    return res
      .status(503)
      .json({ error: { message: "Ocurrió un error interno" } });
  }
};

export const getDogs = async (req: GetDogsRequest, res: Response) => {
  const { user } = req.body;

  try {
    const dogsFound = await prisma.pet.findMany({
      where: { registered_by_id: user.id },
    });
    return res.json(dogsFound);
  } catch (error) {
    return res
      .status(503)
      .json({ error: { message: "Ocurrió un error interno" } });
  }
};

export const getAllDogs = async (req: Request, res: Response) => {
  try {
    const dogsFound = await prisma.pet.findMany();

    console.log(dogsFound);

    return res.json(dogsFound);
  } catch (error) {
    return res
      .status(503)
      .json({ error: { message: "Ocurrió un error interno" } });
  }
};

export const dogDetails = async (req: DogDetailsRequest, res: Response) => {
  const { dogId } = req.params;

  try {
    const dogDetails = await prisma.pet.findUnique({
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
