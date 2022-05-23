const router = require("express").Router();
const Message = require("../models/Message");

// Get
router("/:conversationId", async (req, res) => {
  try {
    const message = await Message.find({
      conversationId: req.params.conversationId,
    });
    res.status(200).json(message);
  } catch (error) {
    res.status(500).json(error);
  }
});

// post
router.post("/", async (res, req) => {
  const newMessage = await new Message(req.body);
  try {
    const savedMessage = newMessage.save();
    res.status(200).json(savedMessage);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
