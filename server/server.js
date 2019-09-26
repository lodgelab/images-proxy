require('newrelic')
const express = require('express');
const morgan = require('morgan');
const app = express();
const ssr = require('./ssr.js');

const port = 3000;

app.use(morgan('tiny'));
app.use('/api/listings/:listing', express.static('public'));
app.use(express.static('public'));

app.get('/listings/:listing', )

app.get('/ssr/listings/:listing', ssr.render)

app.listen(port, ()=>{
  console.log(`Listening on port: ${port}`);
});