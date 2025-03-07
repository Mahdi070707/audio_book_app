/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt, { SignOptions } from 'jsonwebtoken';
import { connectDB } from './connectDB.tsx'; // Adjust the import based on your project structure
import { IUser, UserSchema } from '../models/User'; // Adjust the import based on your project structure

export const User = mongoose.model<IUser>('User', UserSchema);

const app = express();
const port = 3000;

app.use(bodyParser.json());

connectDB();

const secretKey = 'your_secret_key';
const tokenExpiration: jwt.SignOptions['expiresIn'] = process.env.TOKEN_EXPIRATION ? parseInt(process.env.TOKEN_EXPIRATION, 10) : '1h';

app.post('/register', async (req: Request, res: Response): Promise<void> => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400).send('All fields are required');
    return;
  }

  try {
    const existingUserByEmail = await User.findOne({ email });
    if (existingUserByEmail) {
      res.status(400).send('Email address already in use. You already have an account.');
      return;
    }

    const existingUserByUsername = await User.findOne({ username });
    if (existingUserByUsername) {
      res.status(400).send('Username already taken. Please choose a different username.');
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const signOptions: SignOptions = { expiresIn: tokenExpiration };
    const token = jwt.sign({ username, email }, secretKey, signOptions);
    const newUser = new User({ username, email, password: hashedPassword, token });
    await newUser.save();
    res.status(201).send({ message: 'User registered successfully', token });
  } catch (error) {
    res.status(500).send('Internal server error');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});