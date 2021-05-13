const express = require('express');
const articleRoute = require("./article.route");
const commentRoute = require("./comment.route");

const router = express.Router();

router.use('/article', articleRoute);
router.use('/comment', commentRoute);


module.exports = router;
