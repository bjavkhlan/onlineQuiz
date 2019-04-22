const mongoose = require('mongoose');

const Users = mongoose.model('User');
const Subjects = mongoose.model('Subject');


module.exports.evaluateSubmition = async (req, res, next) => {
    const subjectLevel = await Subjects.findOne({"levels._id": req.params.levelId}, {_id: 0, "levels.$.questions": 1}).lean();
    const questions = subjectLevel.levels[0].questions;

    let correct = 0;
    const total = questions.length;

    // req.body.answer? 
    const answers = req.body;
    if (answers && total != answers.length) {
        next({msg: "data doesn't match"});
        return;
    }
    for (let i = 0; i < total; i++) {
        if (questions[i].answer === answers[i].answer) correct++;
    }

    const user = await Users.findOne({email: req.user.email});
    if(!user.levels) user.levels = [];
    user.levels.push({
        levelId: new mongoose.mongo.ObjectID(req.params.levelId),
        gradeForLevel: {
            correct: correct,
            total: total
        }
    });

    user.save((err) => {
        if (err) next(err);
        else {
            res.json({
                correct: correct,
                total: total
            })
        }
    });
}
