var express = require('express');
var router = express.Router();

// Connection base de données

var mongoose = require('mongoose');
mongoose.connect('mongoDB://localhost/testExpress');

mongoose.Promise = global.Promise;

var db = mongoose.connection;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
});

var collection = db.collection('utilisateur')
collection.insert({
        pseudo: 'Paulo31',
        password: 'ploptest',
        conf_password: 'ploptest'
    }, function(err, result) {
        collection
            .find({
                pseudo: 'Paulo31'
            })
            .toArray(function(err, docs) {
                console.log(docs[0, 1])
            })
    }),

    // /* GET home page. */ router.get('/', function(req, res, next) {
    // res.render('index', {         title: 'Express'     }); });

    router.get('/', function(req, res) {
        res.sendFile(__dirname + '/index.html')
    })

router.post('/aff', function(req, res) {
    var p1 = req.body.p1;
    res.send('Pseudo' + p1)
})

module.exports = router;