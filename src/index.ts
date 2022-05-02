import app from "./config/app";

app.listen(app.get("port"), () => {
  console.log(`Servidor iniciado en el puerto: ${app.get("port")}`);
});
