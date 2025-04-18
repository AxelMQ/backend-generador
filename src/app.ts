import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import projectRoutes from './routes/projectRoutes';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api', projectRoutes);

app.listen(PORT, () => {
    console.log(`--> Servidor escuchando en http://localhost:${PORT}`);
})
