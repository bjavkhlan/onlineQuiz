const mongoose = require('mongoose');

const Subjects = mongoose.model('Subject');

module.exports.getSubjects = async function(req, res) {
    const subjects = await Subjects.find();
    res.json(subjects);
}