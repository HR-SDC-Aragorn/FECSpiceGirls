const express = require('express');
require('dotenv').config();
const axios = require('axios');

const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, './client/dist')));
app.use(express.json());

app.get('/products', (req, res) => {
  axios({
    method: 'get',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products',
    headers: {
      Authorization: process.env.API_KEY,
    },
  })
    .then((repsonse) => { res.send(repsonse.data); })
    .catch((err) => { res.send((err)); });
});

app.get('/productid', (req, res) => {
  axios({
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${req.query.id}`,
    headers: {
      Authorization: process.env.API_KEY,
    },
  })
    .then((repsonse) => { res.send(repsonse.data); })
    .catch((err) => { res.send((err)); });
});

app.get('/related', (req, res) => {
  axios({
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${req.query.id}/related`,
    headers: {
      Authorization: process.env.API_KEY,
    },
  })
    .then((repsonse) => { res.send(repsonse.data); })
    .catch((err) => { res.send((err)); });
});

app.get('/styles', (req, res) => {
  axios({
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${req.query.id}/styles`,
    headers: {
      Authorization: process.env.API_KEY,
    },
  })
    .then((repsonse) => { res.send(repsonse.data); })
    .catch((err) => { res.send((err)); });
});

app.get('/products/:product_id', (req, res) => {
  console.log('req:', req);
  axios({
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp${req.originalUrl}`,
    headers: {
      Authorization: `${process.env.API_KEY}`,
    },
  })
    .then((repsonse) => { res.send(repsonse.data); })
    .catch((err) => { res.send((err)); });
});

app.get('/products/:product_id/styles', (req, res) => {
  console.log(req);
  axios({
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp${req.originalUrl}`,
    headers: {
      Authorization: `${process.env.API_KEY}`,
    },
  })
    .then((repsonse) => { res.send(repsonse.data); })
    .catch((err) => { res.send((err)); });
});

app.listen(process.env.PORT, () => {
  console.log(`Listening at http://localhost:${process.env.PORT}`);
});
