const express = require('express');
const router = express.Router();
const { Posts} = require('../models');

const {validateToken } = require("../middlewares/AuthMiddleware");

router.get("/", async (req, res) => {
    const listOfPost = await Posts.findAll({
        order: [
        // Will escape title and validate DESC against a list of valid direction parameters
        ['id', 'DESC']],});
    res.json(listOfPost);
});

router.get("/latest", async (req, res) => {
    const latestOfPost = await Posts.findAll({
        order: [
        // Will escape title and validate DESC against a list of valid direction parameters
        ['id', 'DESC']],limit : 4,});
    res.json(latestOfPost);
});

router.post("/", validateToken, async (req, res) => {
    const post = req.body;
    post.username = req.user.username;
    await Posts.create(post);
    res.json(post);
});

router.delete('/:postId', validateToken, async (req, res) => {
    const postId = req.params.postId;
    await Posts.destroy({
        where: {
            id: postId,
        }
    });

    res.json("Deleted success");
});

module.exports = router;