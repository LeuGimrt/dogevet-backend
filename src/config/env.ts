import dotenv from "dotenv";

dotenv.config();

export default {
  PORT: process.env.PORT || "5000",
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || "es-un-secretooo",
  CLOUDINARY_URL: process.env.CLOUDINARY_URL || "",
  CLOUD_NAME: process.env.CLOUD_NAME || "",
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY || "",
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET || "",
};
