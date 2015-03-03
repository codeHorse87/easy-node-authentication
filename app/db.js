/**
 * Created by marcohammel on 01/03/15.
 */
//db.js

//populate Sequlizer
//connect to database
var configDB = require('./../config/database.js');
var Sequelize = require('sequelize');
var pg = require('pg').native;

// connect to database

/*
 var pgClient = new pg.Client('postgres://mpmmadmin:admin@localhost:5432/mpmm_db');
 pgClient.connect(function(err) {
 if(err) {
 return console.error('failed to connect to ' + configDB.url, err);
 }
 //test db connection
 pgClient.query('SELECT NOW() AS \'now\'', function(err, result) {
 if(err) {
 return console.error('error running test query on ' + configDB.url);
 }
 console.log(result.rows[0].now);
 })
 })
 */

var sequelize = new Sequelize(configDB.url, {
    options: logging = console.log,
    options: schema = 'useradmin'
});

//sync models with db
sequelize.sync();

module.exports = sequelize;