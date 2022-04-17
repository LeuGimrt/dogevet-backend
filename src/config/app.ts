import express from "express";
import cors from "cors";
import env from "./env";
import authRoutes from "../routes/auth.routes";
import dogsRoutes from "../routes/dogs.routes";
import userRoutes from "../routes/user.routes";
import consultsRoutes from "../routes/consults.routes";
import validateToken from "../middlewares/validateToken";
import fileUpload from "express-fileupload";
import validateAdminRole from "../middlewares/validateAdminRole";

const app = express();

// Setup
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
    createParentPath: true,
  })
);
app.set("port", env.PORT || 5000);

// Routes

app.get("/", (req, res) => {
  res.send("index");
});

app.use("/auth", authRoutes);
app.use("/dogs", validateToken, dogsRoutes);
app.use("/user", userRoutes);
app.use("/consults", validateToken, validateAdminRole, consultsRoutes);

export default app;
