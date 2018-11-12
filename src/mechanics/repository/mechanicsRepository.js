'use strict';

const mssql = require('./../../shared/mssql');

/**
 * @param {String} date
 * @param {String} branch
 * @returns {Promise<*|void>}
 */
function getDailyMechanicsSummaryTake(date, branch) {
    return mssql.exec(`SELECT zlp_mechanik, sum(total) AS total
        FROM (
            SELECT DISTINCT zl_id, zlp_mechanik, zl_wartoscUslugiN AS total
              FROM [AcomNEX].[dbo].[nex_wyp_SerZlecenia]
              JOIN [AcomNEX].[dbo].[nex_wyp_SerZleceniaPozycje] 
                ON [AcomNEX].[dbo].[nex_wyp_SerZlecenia].[zl_id]=[AcomNEX].[dbo].[nex_wyp_SerZleceniaPozycje].[zlp_zlid]
              WHERE zl_dataZamkniecia = '${date}'
              AND zl_nrroz = '${branch}'
              AND zlp_mechanik != '.......... ..........'
              AND zlp_mechanik != ' ..........  ..........'
            ) x
        GROUP BY zlp_mechanik`);
}

function getMonthlyMechanicsSummaryTake(year, month, branch) {
    return mssql.exec(`SELECT zlp_mechanik, sum(total) AS total
        FROM (
            SELECT DISTINCT zl_id, zlp_mechanik, zl_wartoscUslugiN AS total
                FROM [AcomNEX].[dbo].[nex_wyp_SerZlecenia]
                JOIN [AcomNEX].[dbo].[nex_wyp_SerZleceniaPozycje]
                ON [AcomNEX].[dbo].[nex_wyp_SerZlecenia].[zl_id]=[AcomNEX].[dbo].[nex_wyp_SerZleceniaPozycje].[zlp_zlid]
                WHERE zl_mc = '${month}'
                AND zl_rok = ${year}
                AND zl_nrroz = '${branch}'
                AND zlp_mechanik != '.......... ..........'
                AND zlp_mechanik != ' ..........  ..........'
            ) x
        GROUP BY zlp_mechanik`);
}

module.exports = {
    getDailyMechanicsSummaryTake,
    getMonthlyMechanicsSummaryTake
};
