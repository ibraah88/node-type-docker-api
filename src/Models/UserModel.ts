import { Document, Schema, Model, model } from 'mongoose';

export interface IUser extends Document {
    firstName: String,
    lastName: String,
    email: String, 
    password: String
}

export const UserSchema = new Schema (
    {
        firstName: {
            type: String,
            required: 'Enter fisrt name',
        },
        lastName: {
            type: String,
            required: 'Enter last name',
        },
        email: {
            type: String,
            unique: true,
            match: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
            required: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
            trim: true
        },
    },
    {
        timestamps: true,
        useNestedStrict: true
    }
);

export const User: Model<IUser> = model<IUser>('User', UserSchema)