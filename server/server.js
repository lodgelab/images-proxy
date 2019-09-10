const express = require('express');
const morgan = require('morgan');
const app = express();

const port = 3000;

app.use(morgan('tiny'));
app.use('/api/listings/:listing', express.static('public'));
app.use(express.static('public'));

app.listen(port);