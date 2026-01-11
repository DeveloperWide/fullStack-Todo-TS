import mongoose from "mongoose";

export async function connectDb() {
  try {
    await mongoose.connect(`mongodb://127.0.0.1:27017/todos`);
    console.log("Mongo Connection Successful");
  } catch (err) {
    console.log(`Mongo Connection Error`);
  }
}
