const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
require('./db/mongoose');

const ENV = require('./config/config');
const newsRoutes = require('./routes/news');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');

const { PORT } = ENV;
const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  );
  next();
});

app.use('/api/news', newsRoutes);
app.use('/api/users', userRoutes);
app.use('/api/categories', categoryRoutes);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${PORT}`);
});
