const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

const connectDB = require('./db/connect');

app.use(express.json());

app.use('/api/v1/tasks', tasks);

const port = 5000;
const start = async () => {
  try {
    await connectDB();
    app.listen(port, console.log(`server listening on port ${port}`));
  } catch (error) {
    console.log(error)
  }
};
start()