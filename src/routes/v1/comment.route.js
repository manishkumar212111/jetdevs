const express = require('express');
const validate = require('../../middlewares/validate');
const commentValidation = require('../../validations/comment.validation');
const commentController = require('../../controllers/comment.controller');

const router = express.Router();

router.post('/:article_id', validate(commentValidation.createComment), commentController.createComment);
router.post('/reply/:comment_id', validate(commentValidation.createComment), commentController.createReply);
router.get('/:article_id', validate(commentValidation.getComments), commentController.getCommentByArticle);
router.get('/comment/:comment_id', validate(commentValidation.getComment), commentController.getComment);

module.exports = router;
