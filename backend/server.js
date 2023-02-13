const { urlencoded } = require("express");
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const cors = require("cors");

const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 8000;

// connect to DB
connectDB();

const app = express();

// To get data must write the below code(getting data like req.body will give undefined if try to use without declaring the below code)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "*",
  })
)

app.get("/", (req, res) => {
  res.send("hello");
});
// Routes
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

// listening to port
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

console.log("Server");
