const Post = require("../models/Post");
const User = require("../models/User");

const router = require("express").Router();

// Add post
router.post("/", async (req, res) => {
  const post = await new Post(req.body);
  try {
    const savedPost = await post.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete post
router.delete("/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (post.userId === req.body.userId) {
    try {
      await Post.findByIdAndDelete(req.params.id);
      res.status(200).json("post has been deleted");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(401).json("you can only delete your posts");
  }
});

// Update post
router.put("/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (post.userId === req.body.userId) {
    try {
      await Post.findByIdAndUpdate(req.params.id, { $set: req.body });
      res.status(200).json("post has been updated");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(401).json("you can only update your posts");
  }
});

// Get a post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(500).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Like/unlike a post
router.put("/:id/like", async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post.likes.includes(req.body.userId)) {
    try {
      await Post.findByIdAndUpdate(req.params.id, {
        $push: { likes: req.body.userId },
      });
      res.status(200).json("post has been liked");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    try {
      await Post.findByIdAndUpdate(req.params.id, {
        $pull: { likes: req.body.userId },
      });
      res.status(200).json("post has been unliked");
    } catch (error) {
      res.status(500).json(error);
    }
  }
});

// Get user all posts
router.get("/profile/:username", async (req, res) => {
  const user = await User.findOne({ username: req.params.username });
  if (user) {
    try {
      const posts = await Post.find({ userId: user._id });
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(404).json("user does not exist");
  }
});

// Get timeline posts
router.get("/timeline/:userId", async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.userId);

    const userPosts = await Post.find({ userId: currentUser._id });
    const friendsPosts = await Promise.all(
      currentUser.followings.map((followingId) => {
        return Post.find({ userId: followingId });
      })
    );
    res.status(200).json(userPosts.concat(...friendsPosts));
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
