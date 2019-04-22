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
    const subject = await Subjects.findById(req.params.subjectId);
    let levels = [];
    for (let level of subject.levels)
        levels.push({
            _id: level._id,
            levelName: level.levelName
        })
    res.json(levels); 
}

module.exports.getQuestionsByLevelId = async function(req, res) {
    const subjectLevel = await Subjects.findOne({"levels._id": req.params.levelId}, {_id: 0, "levels.$.questions": 1}).lean();
    if (!(subjectLevel.levels && subjectLevel.levels.length > 0)) {
        next({msg: "Level not found"});
        return;
    }
    const questions = subjectLevel.levels[0].questions;
    for (let question of questions) {
       // question.answer = undefined;
    }
    res.json(questions);
}