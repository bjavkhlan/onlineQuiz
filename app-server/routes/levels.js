const router = require('express').Router();
const levelControllers = require('../controllers/levelController');

router.get('/subjects', levelControllers.getSubjectNames);
router.get('/:subjectId', levelControllers.getLevelsBySubjectId);
router.get('/questions/:levelId', levelControllers.getQuestionsByLevelId)
module.exports = router;
