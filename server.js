require("dotenv").config();

const express = require("express");
//const routes = require("./routes");
const dbInitialSetup = require("./dbInitialSetup");
const cors = require("cors");
const APP_PORT = process.env.APP_PORT || 8001;
const app = express();

//Middlewares
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

//routes(app);

dbInitialSetup(); // Crea tablas e inserta datos de prueba.

app.listen(APP_PORT, () =>
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}!\n`),
);
