import axios from 'axios';

const template = (app, result) => `
  <!DOCTYPE html>
  <html>
    <header>
     <title> Images Module </title>
     <script>window.__INITIAL__DATA__ = ${JSON.stringify({ result })}</script>
    </header>
    <body>
      <div id="images">${app}</div>
      <script type="text/javascript" src="http://localhost:3777/bundle.js"></script>
    </body>
    <script>
    </script>
    <scrip
  </html>
  `;

export const render = (req, res) => {
  axios
  .get(`http://localhost:3777/ssr/listings/${req.params.listing}`)
  .then(result => {
    res.send(template(result.data.render, result.data.data))
  })
};

