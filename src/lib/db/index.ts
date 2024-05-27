import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI;

if (!uri) {
    throw new Error('Please add your Mongo URI to .env.local');
}

let connection: any;

const connect = async () => {
    if (connection) {
        return connection;
    }
    try {
        connection = await mongoose.connect(uri);
        console.log('Connected to MongoDB');
        return connection;
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
};

export default connect;
