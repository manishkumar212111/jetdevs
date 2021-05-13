const express = require('express');
const validate = require('../../middlewares/validate');
const articleValidation = require('../../validations/article.validation');
const articleController = require('../../controllers/article.controller');

const router = express.Router();

router.get('/:article_id', validate(articleValidation.createArticle), articleController.getArticle);
router.get('/', validate(articleValidation.createArticle), articleController.getArticles);
router.post('/', validate(articleValidation.getArticles), articleController.createArticle);
router.put('/:article_id', validate(articleValidation.getArticle), articleController.updateArticle);
router.delete('/:article_id', validate(articleValidation.deleteArticle), articleController.deleteArticle);

module.exports = router;
