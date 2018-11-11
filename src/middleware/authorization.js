'use strict';

const config = require('./../config');

function authorization(req, res, next) {
    const sha1 = new RegExp('^[a-f0-9]{40}$');
    if (!req.headers || !req.headers.authorization || !sha1.test(req.headers.authorization) || req.headers.authorization !== config.AUTH_KEY) {
        res.status(401).send('Unauthorized').end();
        return false;
    }

    next();
}

module.exports = authorization;
