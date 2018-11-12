'use strict';

const bodyParser = require('body-parser');

const healthCheck = require('./healthCheck/routes');
const authorization = require('./middleware/authorization');
const mechanics = require('./mechanics/routes');

function register(app) {
    app.use('/api/health-check', healthCheck);
    // app.use(authorization);
    app.use(bodyParser.json({limit: '1mb'}));
    app.use('/api/mechanics', mechanics);
}

module.exports = {
    register
};
