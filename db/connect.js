const mongoose = require('mongoose');

const connectionString =
  'mongodb+srv://techdave:david1996@cluster0.7w4uo.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority';

const connectDB = (url) => {
  return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
}

module.exports = connectDB