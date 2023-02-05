import express from 'express';
import carRouter from './routes/car.router';
import motoRouter from './routes/motorcycle.router';

const app = express();

app.use(express.json());
app.use('/cars', carRouter);
app.use('/motorcycles', motoRouter);

export default app;
