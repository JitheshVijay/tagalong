const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  createEvent,
  getEvents,
  getEventById,
  joinEvent,
} = require('../controllers/eventController');

router.post('/', auth, createEvent);
router.get('/', auth, getEvents);
router.get('/:id', auth, getEventById);
router.post('/:id/join', auth, joinEvent);

module.exports = router;
