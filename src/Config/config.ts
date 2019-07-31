import * as dotenv from 'dotenv';
dotenv.config();

export default {
    PORT:  process.env.PORT || '3000',
    MONGODB_URI: process.env.NODE_ENV === 'dev' ?  process.env.MONGO_URI_LOCAL : process.env.MONGO_URI_PROD 
};