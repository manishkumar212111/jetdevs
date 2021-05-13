const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const articleSchema = mongoose.Schema(
  {
    nickname: {
      type: String,
      trim: true,
      default : ""
    },
    title: {
        type: String,
        trim: true,
        default : ""
    },
    content: {
        type: String,
        trim: true,
        default : ""
    }
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
articleSchema.plugin(toJSON);
articleSchema.plugin(paginate);
  
const article = mongoose.model('article', articleSchema);

module.exports = article;
