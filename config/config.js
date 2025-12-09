import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" });

const config = {
  port: process.env.PORT,
  env: process.env.NODE_ENV,
  data: {
    url: process.env.DATABASE,
    password: process.env.DB_PASSWORD,
  },
};
console.log(config.env);
export default config;
