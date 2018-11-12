'use strict';

const mssql = require('./../../shared/mssql');

/**
 * @param {String} date
 * @param {String} branch
 * @returns {Promise<*|void>}
 */
function getDailyMechanicsSummaryTake(date, branch) {
    return mssql.exec(`SELECT DISTINCT zl_id, zlp_mechanik, zl_wartoscUslugiN
        FROM [AcomNEX].[dbo].[nex_wyp_SerZlecenia]
        JOIN [AcomNEX].[dbo].[nex_wyp_SerZleceniaPozycje]
        ON [AcomNEX].[dbo].[nex_wyp_SerZlecenia].[zl_id]=[AcomNEX].[dbo].[nex_wyp_SerZleceniaPozycje].[zlp_zlid]
        WHERE zl_dataZamkniecia = '${date}'
        AND zl_nrroz = '${branch}'
        AND zlp_mechanik != '.......... ..........'`);
}

function getMonthlyMechanicsSummaryTake(date, branch) {
    return null
}

module.exports = {
    getDailyMechanicsSummaryTake,
    getMonthlyMechanicsSummaryTake
};