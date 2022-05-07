const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();
const helmet = require("helmet");
const morgan = require("morgan");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const postsRoute = require("./routes/posts");

try {
  mongoose.connect(
    process.env.ATLAS_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected")
  );
} catch (error) {
  console.log(error);
}

// Middleware //
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("tiny"));

// Use Routes
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/posts", postsRoute);

app.listen(5000, () => {
  console.log(`Connected on port 5000`);
});
