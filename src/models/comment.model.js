const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const commentSchema = mongoose.Schema(
  {
    nickname: {
      type: String,
      trim: true,
      default : ""
    },
    content: {
        type: String,
        trim: true,
        default : ""
    },
    reply: {
        type: Array,
        trim: true,
        default : ""
    },
    article_id : {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'article',
        required: true,  
    
    }
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
commentSchema.plugin(toJSON);
commentSchema.plugin(paginate);



  
const comment = mongoose.model('comment', commentSchema);

module.exports = comment;
