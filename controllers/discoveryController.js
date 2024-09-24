const User = require('../models/User');

// Search Users
exports.searchUsers = async (req, res) => {
  try {
    const { query } = req.query;

    const users = await User.find({
      $or: [
        { name: new RegExp(query, 'i') },
        { username: new RegExp(query, 'i') },
        { interests: new RegExp(query, 'i') },
      ],
    }).select('-password');

    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
