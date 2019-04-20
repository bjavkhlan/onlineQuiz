const router = require('express').Router();
const levelControllers = require('../controllers/levelController');

router.get('/', levelControllers.getSubjects);

router.get('/subjects', levelControllers.getSubjectNames);

router.get('/:subjectId', levelControllers.getLevelsBySubjectId);

module.exports = router;
