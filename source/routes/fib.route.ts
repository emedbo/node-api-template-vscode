import express = require('express');

import fibController = require('../controllers/fib.controller');

let router = express.Router();

router.route('/:number').get(fibController.calcNumber);


export = router;
