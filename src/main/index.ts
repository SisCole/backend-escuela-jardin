import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import router from '../modules';
import { generalErrorHandler, generalError } from '../common/middlewares/general.middleware';
import { verifyTokenMiddleware } from '../common/middlewares/jwt.middleware';   

const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use("/api/v2", verifyTokenMiddleware, router);

app.use(generalError);

app.use(generalErrorHandler);

export default app;