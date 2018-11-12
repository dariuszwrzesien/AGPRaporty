'use strict';

const express = require('express');
const router = express.Router();

const getDailyMechanicsSummaryTake = require('./controller/getDailyMechanicsSummaryTake');
const getMonthlyMechanicsSummaryTake = require('./controller/getMonthlyMechanicsSummaryTake');

router.get('/:branch/:year/:month/:day', getDailyMechanicsSummaryTake);
router.get('/:branch/:year/:month', getMonthlyMechanicsSummaryTake);

module.exports = router;
