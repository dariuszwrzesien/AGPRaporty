'use strict';

const repository = require('./../repository/mechanicsRepository');

async function getDailyMechanicsSummaryTake(req, res) {
    try {
        const date = req.params.year + '-' + req.params.month + '-' + req.params.day;
        const data = await repository.getDailyMechanicsSummaryTake(date, req.params.branch);
        return res.json(data.recordset);
    } catch (err) {
        console.error(err);
    }
}

module.exports = getDailyMechanicsSummaryTake;
