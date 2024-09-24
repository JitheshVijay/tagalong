const Chat = require('../models/Chat');
const Message = require('../models/Message');

// Create Chat
exports.createChat = async (req, res) => {
  try {
    const { participantIds } = req.body;

    const newChat = new Chat({
      participants: [req.user.id, ...participantIds],
    });

    const savedChat = await newChat.save();
    res.json(savedChat);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Chats
exports.getChats = async (req, res) => {
  try {
    const chats = await Chat.find({ participants: req.user.id })
      .populate('participants', 'name')
      .populate('messages');

    res.json(chats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Chat By ID
exports.getChatById = async (req, res) => {
  try {
    const chat = await Chat.findById(req.params.id)
      .populate('participants', 'name')
      .populate('messages');

    res.json(chat);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Send Message
exports.sendMessage = async (req, res) => {
  try {
    const { content } = req.body;

    const newMessage = new Message({
      sender: req.user.id,
      chat: req.params.id,
      content,
    });

    const savedMessage = await newMessage.save();

    // Add message to chat
    await Chat.findByIdAndUpdate(req.params.id, {
      $push: { messages: savedMessage._id },
    });

    res.json(savedMessage);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
