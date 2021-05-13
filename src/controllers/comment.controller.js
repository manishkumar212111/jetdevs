const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { commentService } = require('../services');


const createComment = catchAsync(async (req, res) => {
  const comment = await commentService.createComment({...req.body , article_id : req.params.article_id});
  res.send(comment);
});

const createReply = catchAsync(async (req, res) => {
  const comment = await commentService.createReply(req.body , req.params.comment_id);
  res.send(comment);
});

const getComment = catchAsync(async (req, res) => {
  let comment = await commentService.getCommentById(req.params.comment_id);
  if (!comment) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Comment not found');
  }
  res.send(comment);
});

const getCommentByArticle = catchAsync(async (req, res) => {
  const comment = await commentService.getCommentByArticle(req.params.article_id);
  res.send(comment);
});


module.exports = {
  createComment,
  createReply,
  getComment,
  getCommentByArticle
};
