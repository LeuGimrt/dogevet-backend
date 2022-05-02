import { Sex } from "@prisma/client";
import { Request, Response } from "express";
import prisma from "../config/prisma";
import {
  PetDetailsRequest,
  GetPetsRequest,
  NewPetRequest,
  SearchPetRequest,
} from "../interfaces/pets";

export const newPet = async (req: NewPetRequest, res: Response) => {
  const {
    name,
    b_date,
    type,
    sex,
    img,
    user: { id },
  } = req.body;

  console.log(req.body);

  try {
    const newPet = await prisma.pet.create({
      data: {
        b_date: new Date(b_date),
        type,
        sex: sex === "M" ? Sex.MALE : Sex.FEMALE,
        img,
        name,
        registered_by_id: id,
      },
    });
    return res.json(newPet);
  } catch (error) {
    console.log(error);

    return res.status(503).json({
      error: { message: "No se logró guardar la información" },
    });
  }
};

export const searchPet = async (req: SearchPetRequest, res: Response) => {
  const { name } = req.params;

  try {
    const petsFound = await prisma.pet.findMany({
      where: { name: { contains: name } },
    });
    return res.json(petsFound);
  } catch (error) {
    return res
      .status(503)
      .json({ error: { message: "Ocurrió un error interno" } });
  }
};

export const getPets = async (req: GetPetsRequest, res: Response) => {
  const { user } = req.body;

  try {
    const petsFound = await prisma.pet.findMany({
      where: { registered_by_id: user.id },
    });
    return res.json(petsFound);
  } catch (error) {
    return res
      .status(503)
      .json({ error: { message: "Ocurrió un error interno" } });
  }
};

export const getAllPets = async (req: Request, res: Response) => {
  try {
    const petsFound = await prisma.pet.findMany();

    console.log(petsFound);

    return res.json(petsFound);
  } catch (error) {
    console.log(error);

    return res
      .status(503)
      .json({ error: { message: "Ocurrió un error interno" } });
  }
};

export const petDetails = async (req: PetDetailsRequest, res: Response) => {
  const { petId } = req.params;

  try {
    const petDetails = await prisma.pet.findUnique({
      where: { id: parseInt(petId) },
      include: {
        consultations: {
          include: {
            registered_by: true,
          },
        },
      },
    });
    return res.json(petDetails);
  } catch (error) {
    console.log(error);

    return res
      .status(500)
      .json({ error: { message: "Ocurrió un error interno" } });
  }
};
