const express = require('express');
const router = express.Router();
const calcController = require('../controllers/calcController');

router.post('/', calcController.calculate);

module.exports = router;
