const Conversation = require("../models/Conversation");
const Converation = require("../models/Conversation");

const router = require("express").Router();

// get user conversations
router.get("/:userId", async (res, req) => {
  try {
    const conversations = await Conversation.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json(conversations);
  } catch (error) {
    res.status(500).json(error);
  }
});

// post conversation
router.post("/", async (res, req) => {
  const newConversation = new Conversation({
    members: [req.body.senderId, req.body.recieverId],
  });
  try {
    const savedConversation = await newConversation.save();
    res.send(200).json(savedConversation);
  } catch (error) {
    res.status(500).json(error);
  }
});

// find conversation of two users
router.get("/find/:firstUserId/:secondUserId", async (res, req) => {
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
