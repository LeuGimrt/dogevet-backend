import { Response } from "express";
import jwt from "jsonwebtoken";
import env from "../config/env";
import { compare, genSalt, hash } from "bcrypt";
import prisma from "../config/prisma";
import { RegisterRequest, LoginRequest } from "../interfaces/auth";

export const register = async (req: RegisterRequest, res: Response) => {
  const { firstname, lastname, phone, email, password } = req.body;

  // validate against db

  const userFound = await prisma.user.findUnique({ where: { email } });

  if (userFound)
    return res.status(400).json({
      error: { message: "Ya existe un usuario con este email" },
    });

  // hash password
  const saltRounds = await genSalt(10);

  const hashedPassword = await hash(password, saltRounds);

  try {
    const user = await prisma.user.create({
      data: { firstname, lastname, phone, email, password: hashedPassword },
    });
    return res.json(user);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const login = async (req: LoginRequest, res: Response) => {
  const { email, password } = req.body;

  // validate against db
  const userFound = await prisma.user.findUnique({ where: { email } });

  if (!userFound)
    return res.status(400).json({
      error: { message: "No existe una cuenta asociada a ese correo" },
    });

  // validate password

  const passwordValid = await compare(password, userFound.password);
  if (!passwordValid)
    return res.status(400).json({
      error: {
        message: "Correo o contraseña no válidas. Verifique la información.",
      },
    });

  // jsonwebtoken
  const token = jwt.sign(
    {
      id: userFound.id,
      email: userFound.email,
    },
    env.ACCESS_TOKEN_SECRET
  );

  return res.json({
    user: userFound,
    token,
  });
};
