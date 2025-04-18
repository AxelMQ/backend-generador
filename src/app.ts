import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import projectRoutes from './routes/projectRoutes';
import "reflect-metadata";
import { AppDataSource } from "./config/data-source";


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api', projectRoutes);

app.listen(PORT, () => {
    console.log(`--> Servidor escuchando en http://localhost:${PORT}`);
})

console.log("--> DB Config:", {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
  

AppDataSource.initialize()
  .then(() => console.log("--> Base de datos conectada"))
  .catch((error) => console.error("Error DB:", error));
