var mongoose = require('mongoose');
mongoose.connect("mongodb://bachu:bachu@ds013966.mlab.com:13966/nodejs");

var Schema = mongoose.Schema;

var candidatesSchema = new Schema({
    name : String,
    email: String,
	dob : String,
	department : String,
        number: Number,
    gender: String,
    age: Number
});

var Candidates = mongoose.model('candidates',candidatesSchema);


exports.addcandidate = function(req, res) {
    Candidates.create(req.body, function(err, Candidates) {
        console.log(req.body);
        if(err) { console.log(err); }
        return res.json(201, Candidates);
    });
};
exports.getAllcandidates = function(req, res) {
    Candidates.find({},function(err,docs){
            res.json(docs);
    });    
};

exports.editcandidate = function(req, res) {
    Candidates.findByIdAndUpdate(req.body._id,{$set:req.body}, function(err, Candidates) {
        console.log(req.body);
        if(err) { console.log(err); }
        return res.json(201, Candidates);
    });
};


exports.deletecandidate = function(req, res) {
    Candidates.remove(req.body, function(err, docs) {
        if(err) { return handleError(res, err); }
        Candidates.find({},function(err, Candidates){
            if(err) { return handleError(res, err); }
            return res.status(201).json(Candidates);
        });
        
    });
};
