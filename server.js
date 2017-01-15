var express = require('express');
var mongoose = require('mongoose');

var url = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/test';

// Connect to the DB
mongoose.connect(url);

//var db = mongoose.connection;

var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// configure a public directory to host static content
app.use(express.static(__dirname + '/public'));

require ("./test/app.js")(app);

/*
// require the mongodb native drivers.
var mongodb = require('mongodb');

var MongoClient = mongodb.MongoClient;

// url for local database
var url = 'mongodb://localhost:27017/test';

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
    if (err) {
        console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
        console.log('Connection established to', url);

        // do some work here with the database.

        //Close connection
        db.close();
    }
});
*/

var port = process.env.PORT || 3000;

app.listen(port);