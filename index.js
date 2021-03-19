import express from 'express';
import cors from 'cors';
import routes from './src/routes.js';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(PORT);
