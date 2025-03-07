import { Schema, Document, model } from 'mongoose';

export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    token: string;
}

export const UserSchema = new Schema<IUser>({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    token: { type: String, required: true },
});

export const User = model<IUser>('User', UserSchema);