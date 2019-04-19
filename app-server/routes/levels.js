const router = require('express').Router();
const levelControllers = require('../controllers/levelController');

router.get('/', levelControllers.getSubjects);

module.exports = router;
