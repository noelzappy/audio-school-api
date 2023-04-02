const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const commentSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      trim: true,
    },
    book: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Book',
      default: null,
    },
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    chapter: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Chapter',
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
commentSchema.plugin(toJSON);
commentSchema.plugin(paginate);

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
