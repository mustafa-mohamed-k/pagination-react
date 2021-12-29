const express = require('express');
const router = express.Router();

const {persons} = require('../controllers/persons');

router.route('/persons').post(persons);

module.exports = router;