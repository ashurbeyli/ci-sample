var mongoose = require("mongoose");

var jobSchema = mongoose.Schema({
    title: {type: String},
    description: {type: String}
});

var Job = mongoose.model('Job', jobSchema);

exports.seedJobs = function() {
    Job.find({}).exec(function(error, collection){
        if(collection.length === 0) {
            Job.create({title: 'Cook', description: 'desc...'});
            Job.create({title: 'Cook1', description: 'desc...'});
            Job.create({title: 'Cook2', description: 'desc...'});
            Job.create({title: 'Cook3', description: 'desc...'});
        }
    })
}