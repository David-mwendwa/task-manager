const mongoose = require('mongoose');

const connectionString =
  'mongodb+srv://techdave:david1996@cluster0.7w4uo.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority';

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`connected to the db!`))
  .catch((err) => console.log(err));
