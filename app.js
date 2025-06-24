import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './mongoDB/mongoconnect.js';
import { router } from './routes/number-generate.js';
import { routerUser } from './routes/user.js';
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();

connectDB();
app.use(cors());
app.use(express.json());


app.use(`/api/numbers`, router )

app.use(`/api/users`, routerUser )

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.use(express.static(path.join(__dirname, 'dist')));

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
})

export default app;