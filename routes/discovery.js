const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { searchUsers } = require('../controllers/discoveryController');

router.get('/users', auth, searchUsers);

module.exports = router;
