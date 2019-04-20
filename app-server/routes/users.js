const router = require('express').Router();
const userController = require('../controllers/userController')

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', userController.signup);
router.post('/login', userController.login);

module.exports = router;
