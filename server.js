const express = require('express');
require('dotenv').config();
const axios = require('axios');

const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, './client/dist')));

app.use(express.json());

// const options = {
//   method: 'get',
//   url: 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp',
//   headers: {
//     Authorization: `${process.env.API_KEY}`,
//   },
// };

// app.get('/*', (req, res) => {
//   // const urlCopy = options.url;
//   // const newURL = path.join(urlCopy, req.originalUrl);
//   axios({ method: 'get',
//     url: 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp',
//     headers: {
//       Authorization: `${process.env.API_KEY}`,
//     },
//   })
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) =>
//       console.log('error data', err));
// });

app.get('/products', (req, res) => {
  axios({
    method: 'get',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products',
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
