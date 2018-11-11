'use strict';

const express = require('express');
const router = express.Router();

const getHealthCheck = require('./controller/getHealthCheck');

router.get('/', getHealthCheck);

module.exports = router;
