'use strict';

const repository = require('./../repository/mechanicsRepository');

async function getDailyMechanicsSummaryTake(req, res) {
    try {
        const date = req.params.year + '-' + req.params.month + '-' + req.params.day;
        const data = await repository.getDailyMechanicsSummaryTake(date, req.params.branch);
        if (data && data.recordset) {
            return res.json(data.recordset);
        }
        return res.json([]);
    } catch (err) {
        console.error(err);
    }
}

module.exports = getDailyMechanicsSummaryTake;
