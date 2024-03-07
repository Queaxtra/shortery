const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const createRoute = require('./src/routes/create');
const viewRoute = require('./src/routes/view');
const homeRoute = require('./src/routes/home');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  next();
});


app.use('/create', createRoute);
app.use('/', viewRoute);
app.use('/', homeRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
