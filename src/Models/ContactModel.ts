import { Document, Schema, Model, model }  from 'mongoose';

export interface IContact extends Document {
    company: String,
    phone: Number
}

export const ContactSchema = new Schema(
    {
        company: {
            type: String
        },
        phone: {
            type: Number
        },
    },
    {
        timestamps: true,
        useNestedStrict: true
    }
);

export const Contact: Model<IContact> = model<IContact>('Contact', ContactSchema);