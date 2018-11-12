'use strict';

const repository = require('./../repository/mechanicsRepository');

async function getMonthlyMechanicsSummaryTake(req, res) {
    try {
        const data = await repository.getMonthlyMechanicsSummaryTake(req.params.year, req.params.month, req.params.branch);
        if (data && data.recordset) {
            return res.json(data.recordset);
        }
        return res.json([]);
    } catch (err) {
        console.error(err);
    }
}

module.exports = getMonthlyMechanicsSummaryTake;
