const { Comment } = require('../models');


/**
 * Create a comment
 * @param {Object} commentBody
 * @returns {Promise<Comment>}
 */
const createComment = async (commentBody) => {
  const comment = await Comment.create({ ...commentBody });
  return comment;
};

const createReply = async (body , comment_id) => {
    body = {...body , date : new Date()};
    console.log(body , comment_id)
    return Comment.findByIdAndUpdate(comment_id , 
        {
            $push: {
                "reply":{
                    ...body
                }
            }   
        }
        )
};

/**
 * Get comment by id
 * @param {ObjectId} id
 * @returns {Promise<Comment>}
 */
const getCommentById = async (id) => {
  return await Comment.findById(id);
};

/**
 * Update comment by id
 * @param {ObjectId} commentId
 * @param {Object} updateBody
 * @returns {Promise<Comment>}
 */
const getCommentByArticle = async (article_id) => {
    let comment  = await Comment.find({article_id : article_id});
    return comment;
};


module.exports = {
  createComment,
  createReply,
  getCommentById,
  getCommentByArticle,
};
