import express from "express";
import cors from "cors";
import env from "./env";
import authRoutes from "../routes/auth.routes";
import petsRoutes from "../routes/pets.routes";
import userRoutes from "../routes/user.routes";
import consultsRoutes from "../routes/consults.routes";
import validateToken from "../middlewares/validateToken";
import validateAdminRole from "../middlewares/validateAdminRole";

const app = express();

// Setup
app.use(
  cors({
    origin: env.CLIENT_URL,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("port", env.PORT || 5000);

// Routes

app.get("/", (req, res) => {
  res.send("index");
});

app.use("/auth", authRoutes);
app.use("/pets", validateToken, petsRoutes);
app.use("/user", userRoutes);
app.use("/consults", validateToken, validateAdminRole, consultsRoutes);

export default app;
