require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routes/authRouter");
const userRouter = require("./routes/userRouter");
const productsRouter = require("./routes/productsRouter");
const reviewsRouter = require("./routes/reviewsRouter");
const categoriesRouter = require("./routes/categoriesRouter");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middlewares/errorMiddleware");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);
app.use("/api", authRouter);
app.use("/api", userRouter);
app.use("/api", categoriesRouter);
app.use("/api", productsRouter);
app.use("/api", reviewsRouter);
app.use(errorMiddleware);

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    app.listen(PORT, () => console.log(`server started on ${PORT} port`));
  } catch (e) {
    console.log(e);
  }
};

start();
