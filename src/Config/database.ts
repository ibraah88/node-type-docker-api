import mongoose from 'mongoose';
import CONFIG from './config';

export const connect = (async () => {
    try {
        if (CONFIG.MONGODB_URI) {
            await mongoose.connect(
                CONFIG.MONGODB_URI,
                { useNewUrlParser: true }
            );
            console.log(`MongoDB connected to -> ${CONFIG.MONGODB_URI}`);
        }
    } catch (err) {
        console.log(`${err} Could not Connect to the Database. Exiting Now...`);
        process.exit();
    }
});