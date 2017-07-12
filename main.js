'use strict';

const path = require('path');
const express = require('express');//lightweight web server
const productContent = require('./data/content.json');//require json data
const app = express();

app.get('/data/product-content', (req, res) => {
  res.json(productContent);
});

app.use(express.static(__dirname + '/dist'));

app.listen(8000);
