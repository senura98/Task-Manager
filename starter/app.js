const connectDB = require("./db/connect");
const express = require("express");
const app = express();
const tasks = require("./routes/task");
require("dotenv").config();
const notFound = require("./middleware/notFound");
const errorHandlerMiddleware = require("./middleware/errorHandler");

//middleware
app.use(express.json());

//routes
app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);
const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server listens on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
