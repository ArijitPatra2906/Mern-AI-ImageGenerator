import mongoose from 'mongoose';
import { Log } from "colorfull-console";

const connectDB = (url) => {
  mongoose.set('strictQuery', true);
  mongoose.connect(url)
    .then(() => Log.success('Connected to MongoDB'))
    .catch((err) => {
      Log.danger('failed to connect with mongo');
      console.error(err);
    });
};

export default connectDB;