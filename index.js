import express from "express";
import mongoose from "mongoose";
import bookRouter from './routes/book.js';
import 'dotenv/config.js';

const app = express();
const PORT = 3001;

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Database is connected successfully'));

app.use(express.json());
app.use("/books", bookRouter);

app.get('/', (req, res) => {
    res.send("Welcome to my second project");
})

app.listen(PORT, () => console.log('Server Started'));


