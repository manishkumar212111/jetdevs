const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createComment = {
  params: Joi.object().keys({
    article_id: Joi.string().custom(objectId),
    comment_id: Joi.string().custom(objectId),

  }),
  body: Joi.object().keys({
    nickname : Joi.string().required(),
    content : Joi.string().required(),
  }),
};

const getComments = {
  params: Joi.object().keys({
    article_id: Joi.string().custom(objectId),
  }),
  query: Joi.object().keys({
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getComment = {
  query: Joi.object().keys({
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
  params: Joi.object().keys({
    comment_id: Joi.string().custom(objectId),
  }),
};

const createReply = {
  params: Joi.object().keys({
    comment_id: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      nickname : Joi.string().required(),
      content : Joi.string().required(),
    })
    .min(1),
};

const deleteComment = {
  params: Joi.object().keys({
    comment_id: Joi.string().custom(objectId),
  }),
};


module.exports = {
  createComment,
  createReply,
  getComments,
  getComment,
  deleteComment,
};
