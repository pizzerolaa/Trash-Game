const express = require('express');
const router = express.Router();
const { Users } = require('../models');
const bcrypt = require('bcrypt');
const cors = require('cors');
const { validateToken } = require('../middlewares/AuthMiddleware');
const { sign } = require('jsonwebtoken');

router.use(cors());

router.post("/", async (req, res) => {
    const { username, password } = req.body;

    const user = await Users.findOne({ where: { username: username } });
    if (user) {
        return res.status(400).json({ error: "Username already exists" });
    }

    bcrypt.hash(password, 10).then((hash) => {
        Users.create({
            username: username,
            password: hash,
        }).then(() => {
            res.json("Success");
        }).catch((err) => {
            res.status(500).json({ error: "Something went wrong" });
        });
    });
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await Users.findOne({ where: { username: username } });
    if (!user) res.json({ error: "User doesn't exist" });

    bcrypt.compare(password, user.password).then((match) => {
        if (!match) res.json({ error: "Wrong username and password combination" });

        const accessToken = sign({ username: user.username, id: user.id }, "importantsecret");
        res.json({ token: accessToken, username: user.username, id: user.id });
    });
});

router.get("/auth", validateToken, (req, res) => {
    res.json(req.user);
});

module.exports = router;
