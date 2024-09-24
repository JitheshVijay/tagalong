const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getUserProfile, updateUserProfile } = require('../controllers/userController');

router.get('/:id', auth, getUserProfile);
router.put('/:id', auth, updateUserProfile);

module.exports = router;

