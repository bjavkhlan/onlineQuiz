const router = require('express').Router();
const authMiddleware = require('../middlewares/auth');
const submissionControllers = require('../controllers/submissionController');

router.post('/:levelId', authMiddleware, submissionControllers.evaluateSubmition);

module.exports = router;
