const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const chapterPlaySchema = mongoose.Schema(
  {
    chapter: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Chapter',
      required: true,
    },
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    playedTime: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
chapterPlaySchema.plugin(toJSON);
chapterPlaySchema.plugin(paginate);

const ChapterPlay = mongoose.model('ChapterPlay', chapterPlaySchema);

module.exports = ChapterPlay;
