import mongoose from "mongoose";
import config from "./config.js";

const { data } = config;

const DB = data.url.replace("<PASSWORD>", data.password);

// export const connectDB = () => {
//   mongoose
//     .connect(DB)
//     .then(() => {
//       console.log("Database connected successfully");
//     })
//     .catch((error) => {
//       console.log("Database connection failed", error);
//     });
// };

export const connectDB = async () => {
  try {
    let data = await mongoose.connect(DB);
    console.log("Database connected succesfully");
  } catch (error) {
    console.log("Database connection failed", error.message);
  }
};
