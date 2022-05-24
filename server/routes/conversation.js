const router = require("express").Router();
const Conversation = require("../models/Conversation");

// post conversation
router.post("/", async (req, res) => {
  try {
    const newConversation = new Conversation({
      members: [req.body.senderId, req.body.recieverId],
    });
    const savedConversation = await newConversation.save();
    res.send(200).json(savedConversation);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get user conversations
router.get("/:userId", async (req, res) => {
  try {
    const conversations = await Conversation.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json(conversations);
  } catch (error) {
    res.status(500).json(error);
  }
});

// find conversation of two users
router.get("/find/:firstUserId/:secondUserId", async (req, res) => {
  try {
    const conversations = await Conversation.find({
      members: { $all: [req.params.firstUserId, req.params.secondUserId] },
    });
    res.status(200).json(conversations);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
