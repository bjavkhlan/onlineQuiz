const router = require('express').Router();
const mongoose = require('mongoose');
const authMiddleware = require('../middlewares/auth');

const Subjects = mongoose.model('Subject');

const adminMiddleware = function(req, res, next) {
  if (req.user.isAdmin === true) next();
  else next({msg:"user is not Admin"});
}

// create new subjects
router.post('/subject/:subjectName', authMiddleware, adminMiddleware, function(req, res, next) {
  const newSubject = new Subjects({subjectName: req.params.subjectName});
  newSubject.save(err => {
    if (err) next(err);
    else res.json(newSubject);
  });
});


// create level for subject
router.post('/level/:subjectId', authMiddleware, adminMiddleware, async function(req, res, next) {
  const subject = await Subjects.findById(req.params.subjectId);
  if (subject.levels === undefined) subject.levels = [];
  req.body._id = new mongoose.mongo.ObjectID();
  subject.levels.push(req.body);
  subject.save(err => {
    if (err) next(err);
    else res.json(subject);
  })
});

module.exports = router;