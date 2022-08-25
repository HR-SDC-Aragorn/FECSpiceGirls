const express = require('express');
require('dotenv').config();

const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.use(express.json());

app.get(process.env.API_HOST, () => {
  console.log('connected!');
});

app.post(process.env.API_HOST);

app.listen(process.env.PORT, () => {
  console.log(`Listening at http://localhost:${process.env.PORT}`);
});
