'use strict';

const express = require('express');
const dbConnection = require('tedious').Connection;

const routing = require('./src/routing');
const config = require('./src/config');

const dbConfig = {
    userName: config.DATABASE.USER,
    password: config.DATABASE.PASSWORD,
    server: config.DATABASE.SERVER,
    database: config.DATABASE.DB_NAME,
    options: {
        encrypt: true,
        instanceName: config.DATABASE.INSTANCE
    }
};

const app = express();
routing.register(app);

var db = new dbConnection(dbConfig);
db.on('connect', function(err) {
    if (err) {
        console.error(err);
    } else {
        console.log("Database connection established");
        queryDatabase();
    }

});

app.listen(3018);
console.info('Server is listening on port: ' + config.PORT);

var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;

function queryDatabase()
{ console.log('Reading rows from the Table...');

    // Read all rows from table
    const request = new Request(
        "SELECT [testString] FROM [DwrTest].[dbo].[TestTable]",
        function(err, rowCount, rows)
        {
            console.log(rowCount + ' row(s) returned');
            process.exit();
        }
    );

    request.on('row', function(columns) {
        columns.forEach(function(column) {
            console.log("%s\t%s", column.metadata.colName, column.value);
        });
    });
    db.execSql(request);
}



