const mongoose = require('mongoose');
const ENV = require('../config/config');

const MONGO_URL = `mongodb+srv://${ENV.MONGODB_CREDENTIALS}@cluster0.y4kzl.mongodb.net/${ENV.DB_NAME}?retryWrites=true&w=majority`;

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('Connected to MongoDB');
  })
  .catch(() => {
    // eslint-disable-next-line no-console
    console.log('Failed!');
  });
