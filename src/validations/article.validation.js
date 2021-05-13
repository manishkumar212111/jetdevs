const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createArticle = {
  body: Joi.object().keys({
    nickname : Joi.string().required(),
    title : Joi.string().required(),
    content : Joi.string().required(),
  }),
};

const getArticles = {
  query: Joi.object().keys({
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getArticle = {
  query: Joi.object().keys({
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
  params: Joi.object().keys({
    article_id: Joi.string().custom(objectId),
  }),
};

const updateArticle = {
  params: Joi.object().keys({
    article_id: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
        nickname : Joi.string(),
        title : Joi.string(),
        content : Joi.string(),
    })
    .min(1),
};

const deleteArticle = {
  params: Joi.object().keys({
    article_id: Joi.string().custom(objectId),
  }),
};


module.exports = {
  createArticle,
  getArticles,
  getArticle,
  updateArticle,
  deleteArticle,
};
