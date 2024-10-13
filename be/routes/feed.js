const express = require("express");

const router = express.Router();

const { getPosts, postPost } = require("../controllers/feed");

// feed/posts => GET
router.get("/posts", getPosts);
router.post("/post", postPost);

module.exports = router;
