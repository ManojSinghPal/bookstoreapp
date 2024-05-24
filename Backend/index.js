// const express = require("express");
// const dotenv = require("dotenv");
import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";

// Routers
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();
// const port = 3000;

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Begin connect to mongoDB
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Mongodb Connected");
} catch (error) {
  console.log("error: ", error);
}

// --------End connect to mongoDB--------------------

// Begin defining routes
app.use("/book", bookRoute);

app.use("/user", userRoute);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
