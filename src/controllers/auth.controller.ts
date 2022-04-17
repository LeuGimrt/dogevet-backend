import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import env from "../config/env";
import md5 from "md5";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const register: RequestHandler = async (req, res) => {
  const { firstname, lastname, phone, email, password } = req.body;

  // validate against db

  const userFound = await prisma.user.findUnique({ where: { email } });

  if (userFound)
    return res.status(400).json({
      error: { message: "Ya existe un usuario con este email" },
    });

  // hash password
  const hashedPassword = md5(password);

  try {
    const user = await prisma.user.create({
      data: { firstname, lastname, phone, email, password: hashedPassword },
    });
    res.json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const login: RequestHandler = async (req, res) => {
  const { email, password } = req.body;

  // validate against db
  const userFound = await prisma.user.findUnique({ where: { email } });

  if (!userFound)
    return res.status(400).json({
      error: { message: "No existe una cuenta asociada a ese correo" },
    });

  // validate password
  if (md5(password) !== userFound.password) {
    return res.status(400).json({
      error: { message: "Credenciales incorrectas" },
    });
  }

  // jsonwebtoken
  const token = jwt.sign(
    {
      id: userFound.id,
      email: userFound.email,
    },
    env.ACCESS_TOKEN_SECRET
  );

  res.json({
    user: userFound,
    token,
  });
};
