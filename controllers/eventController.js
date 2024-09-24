const Event = require('../models/Event');

// Create Event
exports.createEvent = async (req, res) => {
  try {
    const { title, date, time, location, description } = req.body;

    const newEvent = new Event({
      title,
      date,
      time,
      location,
      description,
      creator: req.user.id,
    });

    const savedEvent = await newEvent.save();
    res.json(savedEvent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Events
exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find().populate('creator', 'name');
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Event By ID
exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id).populate('creator', 'name');
    res.json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Join Event
exports.joinEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event.attendees.includes(req.user.id)) {
      event.attendees.push(req.user.id);
      await event.save();
    }

    res.json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
