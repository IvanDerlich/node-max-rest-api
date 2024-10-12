const express = require("express");

const router = express.Router();

const { getPosts } = require("../controllers/feed");

// feed/posts => GET
router.get("/posts", getPosts);

module.exports = router;
