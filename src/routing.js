'use strict';

const bodyParser = require('body-parser');

const healthCheck = require('./healthCheck/routes');
const authorization = require('./middleware/authorization');

function register(app) {
    app.use('/api/health-check', healthCheck);
    // app.use(authorization);
    app.use(bodyParser.json({limit: '1mb'}));
}

module.exports = {
    register
};
