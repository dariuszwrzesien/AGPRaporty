'use strict';

const repository = require('./../repository/mechanicsRepository');

async function getMonthlyMechanicsSummaryTake(req, res) {
    try {
        const data = await repository.getMonthlyMechanicsSummaryTake(req.params.year, req.params.month, req.params.branch);
        return res.json(data.recordset);
    } catch (err) {
        console.error(err);
    }
}

module.exports = getMonthlyMechanicsSummaryTake;
