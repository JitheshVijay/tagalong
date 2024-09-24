const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  createChat,
  getChats,
  getChatById,
  sendMessage,
} = require('../controllers/chatController');

router.post('/', auth, createChat);
router.get('/', auth, getChats);
router.get('/:id', auth, getChatById);
router.post('/:id/messages', auth, sendMessage);

module.exports = router;
