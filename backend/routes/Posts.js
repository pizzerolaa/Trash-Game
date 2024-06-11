const express = require('express');
const router = express.Router();
const { Posts } = require('../models');

const {validateToken } = require("../middlewares/AuthMiddleware");

router.get("/", async (req, res) => {
    const listOfPost = await Posts.findAll();
    res.json(listOfPost);
});

router.post("/", validateToken, async (req, res) => {
    const post = req.body;
    post.username = req.user.username;
    await Posts.create(post);
    res.json(post);
})

module.exports = router;