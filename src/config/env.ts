import dotenv from "dotenv";

dotenv.config();

export default {
  PORT: process.env.PORT || "5000",
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || "SECRET-TOKEN",
  CLIENT_URL: process.env.CLIENT_URL || "http://localhost:3000",
};
