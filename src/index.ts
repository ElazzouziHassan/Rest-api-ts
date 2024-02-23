import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import dotenv from 'dotenv'

import mongoose from 'mongoose';

dotenv.config()
const app = express();

app.use(cors({
    credentials: true,
}));

app.use(bodyParser.json());
app.use(compression());
app.use(cookieParser());

// server setup :
const server = http.createServer(app);

// running server :
server.listen(8080, () => {
    console.log('Server running on http://localhost:8080/')
})

const MONGODB_URL = 'mongodb+srv://'+process.env.DB_USERNAME+':'+process.env.DB_PASSWORD+'@cluster0.hmjah5l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // DB URL

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URL);
mongoose.connection.on('error', (error: Error) => console.log(error));
