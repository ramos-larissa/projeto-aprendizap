const { JsonDB, Config } = require('node-json-db');

const db = new JsonDB(new Config('database/db', true, true, '/'));

module.exports = db;