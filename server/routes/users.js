const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

// Get user
router.get("/", async (req, res) => {
  const userId = req.query.userId;
  const username = req.query.username;
  try {
    const user = userId
      ? await User.findById(userId)
      : await User.findOne({ username: username });
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete user
router.delete("/:id", async (req, res) => {
  const userId = req.body.userId;
  const id = req.params.id;
  try {
    const currentUser = await User.findById(userId);
    if (userId === id || currentUser.isAdmin === true) {
      try {
        await User.findByIdAndDelete(id);
        res.status(200).json("user deleted");
      } catch (error) {
        res.status(403).json("not authorized to delete user");
      }
    }
  } catch (error) {
    res.status(403).json(error);
  }
});

// Follow user
router.put("/:id/follow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { followings: req.params.id } });
        res.status(200).json("user has been followed");
      } else {
        res.status(403).json("you already follow this user");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you can't follow yourself");
  }
});

// Unfollow user
router.put("/:id/unfollow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({ $pull: { followers: req.body.userId } });
        await currentUser.updateOne({ $pull: { following: req.params.id } });
        res.status(200).json("user has been unfollowed");
      } else {
        res.status(403).json("you don't follow this user");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you can't unfollow yourself");
  }
});

// Get friends
router.get("/friends/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const friends = await Promise.all(
      user.followings.map((userId) => {
        return User.findById(userId);
      })
    );
    let friendList = [];
    friends.map((friend) => {
      const { _id, username, profilePicture, coverPicture } = friend;
      friendList.push({ _id, username, profilePicture, coverPicture });
    });
    console.log(friendList);
    res.status(200).json(friendList);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Update user
router.put("/:id", async (req, res) => {
  const currentUser = req.body.userId;
  const updateUser = req.params.id;

  if (currentUser === updateUser || currentUser.isAdmin === true) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (error) {
        res.status(500).json(error);
      }
    }
    try {
      await User.findByIdAndUpdate(updateUser, { $set: req.body });
      res.status(200).json("user updated");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(401).json("not authorized to perform update");
  }
});

// Delete user
router.delete("/:id", async (req, res) => {
  try {
    const deleteUser = req.params.id;
    const currentUser = req.body.userId;
    if (deleteUser === currentUser || currentUser.isAdmin === true) {
      await User.findByIdAndDelete(deleteUser);
      res.status(200).json("user is deleted");
    } else {
      res.status(401).json("not authorized to delete user");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
