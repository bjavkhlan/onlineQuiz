const router = require('express').Router();
const userquisezControllers = require('../controllers/userquizesController');

router.get('/:username', userquisezControllers.getUserQuizes);
module.exports = router;
