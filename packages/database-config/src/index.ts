import mongoose from 'mongoose';

export const DB = async (uri: string) => {
  try {
    await mongoose.connect(uri);
    console.log('connected');
  } catch (error) {
    console.log('Database connection error', error);
  }
};
