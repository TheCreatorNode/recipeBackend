import app from "./app.js";
import config from "./config/config.js";
import { connectDB } from "./config/dbConfig.js";

connectDB();
app.listen(config.port, () => {
  console.log(`server is running on ${config.port}`);
});
