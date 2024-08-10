const workoutController = require('../controller/workoutController');
const router = require('express').Router();

router.post('/getAll',workoutController.getAll);

module.exports = router;