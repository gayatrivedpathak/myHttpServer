const { bodyParamsParser } = require('./src/handler/bodyParamsParser.js');
const { searchParamsParser } = require('./src/handler/searchParamsParser.js');
const { startServer, createRouter } = require('./src/server/server.js');

module.exports = { bodyParamsParser, searchParamsParser, startServer, createRouter };
