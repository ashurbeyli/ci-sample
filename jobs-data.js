var mongoose = require("mongoose");
var Promise = require("bluebird");

var Job = mongoose.model('Job');

exports.findJobs = function(query) {
    return Promise.cast(Job.find(query).exec());
}

exports.connectDb = Promise.promisify(mongoose.connect, {context: mongoose});

exports.seedJobs = function() {
    return new Promise(function(resolve, reject) {
        Job.find({}).exec(function(error, collection){
            if(collection.length === 0) {
                Job.create({title: 'Cook', description: 'desc...'});
                Job.create({title: 'Cook1', description: 'desc...'});
                Job.create({title: 'Cook2', description: 'desc...'});
                Job.create({title: 'Cook3', description: 'desc...'}, resolve);
            }
        })
    });
}