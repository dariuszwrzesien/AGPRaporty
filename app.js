'use strict';

const express = require('express');

const routing = require('./src/routing');
const config = require('./src/config');
const mssql = require('./src/shared/mssql');

const dbConfig = {
    user: config.DATABASE.USER,
    password: config.DATABASE.PASSWORD,
    server: config.DATABASE.SERVER,
    database: config.DATABASE.DB_NAME,
    options: {
        encrypt: true,
        instanceName: config.DATABASE.INSTANCE
    }
};

async function main() {
    const app = express();
    routing.register(app);
    await mssql.init(dbConfig);

    app.listen(config.PORT);
    console.info('Server is listening on port: ' + config.PORT);
}

main().catch(console.error);

process.on('SIGINT', () => process.exit());
process.on('SIGTERM', () => process.exit());
