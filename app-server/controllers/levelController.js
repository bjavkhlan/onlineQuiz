const mongoose = require('mongoose');

const Subjects = mongoose.model('Subject');

module.exports.getSubjects = async function(req, res) {
    const subjects = await Subjects.find();
    res.json(subjects);
}

module.exports.getSubjectNames = async function(req, res) {
    const subjectNames  = await Subjects.find({}, { "subjectName":1 });
    res.json(subjectNames);
}

module.exports.getLevelsBySubjectId = async function(req, res) {
    const result = await Subjects.findById(req.params.subjectId);
    res.json(result); 
}