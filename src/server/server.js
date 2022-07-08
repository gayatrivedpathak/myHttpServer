const http = require('http');
const { URL } = require('url');
const { createRouter } = require('./createRouter.js');

const startServer = (port, handler) => {
  const server = http.createServer((request, response) => {
    handler(request, response);
  });

  server.listen(port, () => {
    console.log(`listening on ${server.address().port}`);
  });
};

module.exports = { startServer, createRouter };
