import {} from 'dotenv/config.js';
import express from 'express';
import cors from 'cors';
import routes from './src/routes.js';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use((err, req, res, next) => {
  if (process.env.NODE_ENV === 'production')
    res.status(500).json({ error: 'Internal server error.' });
  else return next(err);
});

app.listen(PORT);
