import { Role } from "@prisma/client";
import { Request, Response, NextFunction } from "express";

const validateAdminRole = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    user: { role },
  } = req.body;

  if (role !== Role.ADMIN)
    return res.status(401).json({
      error: {
        message: "No cuenta con privilegios para acceder al contenido",
      },
    });
  console.log("admins");

  next();
};

export default validateAdminRole;
