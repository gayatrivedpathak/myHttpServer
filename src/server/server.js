const http = require('http');
const { URL } = require('url');
const { bodyParamsParser } = require('./handler/bodyParamsParser.js');
const { searchParamsParser } = require('./handler/searchParamsParser.js');
const { createRouter } = require('./createRouter.js');

const startServer = (port, handler) => {
  const server = http.createServer((request, response) => {
    handler(request, response);
  });

  server.listen(port, () => {
    console.log(`listening on ${server.address().port}`);
  });
};

module.exports = { startServer, bodyParamsParser, searchParamsParser, createRouter };
