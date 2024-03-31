import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from '../api/routes/user.route.js';
import authRoutes from '../api/routes/auth.route.js';
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('MongoDB is Connected');
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();
app.use(express.json());
const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
