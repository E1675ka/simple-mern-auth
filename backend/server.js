import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connetced to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();

app.listen(5000, () => {
  console.log("server listening on port 5000! ");
});
app.use("/api/user", userRoutes);
