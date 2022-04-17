import env from "../config/env";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import prisma from "../config/prisma";

const validateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];

  const token = authHeader?.split(" ")[1];

  if (!token)
    return res.status(401).json({
      error: { message: "No tiene autorización para acceder al contenido" },
    });

  try {
    const identifiedUser = jwt.verify(token, env.ACCESS_TOKEN_SECRET);
    req.body = { ...req.body, user: identifiedUser };
  } catch (error) {
    return res.status(400).json({ error: { message: "Token Inválido" } });
  }

  const userFound = await prisma.user.findUnique({
    where: { email: req.body.user.email },
  });

  if (!userFound)
    return res
      .status(400)
      .json({ error: { message: "Usuario no encontrado" } });

  req.body = { ...req.body, user: userFound };

  next();
};

export default validateToken;
