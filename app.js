require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookiePaser = require("cookie-parser");
const cors = require("Cors");

//my Routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");

//DB CONNECT
mongoose
  .connect(process.env.DATABASE_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("DB CONNECT");
  });

// MIDDLEWARE
app.use(bodyParser.json());
app.use(cookiePaser());
app.use(cors());

//ROUTES
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/category", categoryRoutes);
app.use("/product", productRoutes);

// PORTS
const port = process.env.PORT;

//STARTING SERVER
app.listen(port, () => {
  console.log(`app is running ${port}`);
});
