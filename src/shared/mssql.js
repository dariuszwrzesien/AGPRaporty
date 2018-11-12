'use strict';

const sql = require('mssql');

class Mssql {
    async init(config) {
        try {
            this.pool = await sql.connect(config);
        } catch (err) {
            console.error(err);
        }
    }

    async exec(query) {
        try {
            return await this.pool.request()
                .query(query);
        } catch (err) {
            console.error(err);
        }
    }
}

const mssql = new Mssql();

module.exports = mssql;