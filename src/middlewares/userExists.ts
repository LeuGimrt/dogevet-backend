import { Role } from "@prisma/client";
import { Request, Response, NextFunction } from "express";
import prisma from "../config/prisma";

const userExists = async (req: Request, res: Response, next: NextFunction) => {
  const {
    user: { id },
  } = req.body;
  console.log(id);

  const userFound = await prisma.user.findUnique({ where: { id } });

  if (!userFound)
    return res
      .status(400)
      .json({ error: { message: "Usuario no encontrado" } });

  next();
};

export default userExists;
