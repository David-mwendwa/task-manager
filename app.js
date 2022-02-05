const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

require('./db/connect');

app.use(express.json());

app.use('/api/v1/tasks', tasks);

const port = 5000;
app.listen(port, console.log(`server listening on port ${port}`));
