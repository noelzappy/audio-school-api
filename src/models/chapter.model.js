const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const chapterSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    book: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Book',
      required: true,
    },
    transcription: {
      type: String,
      trim: true,
      default: '',
    },
    description: {
      type: String,
      trim: true,
      default: '',
    },
    audio: {
      type: String,
      required: true,
      trim: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
    dislikes: {
      type: Number,
      default: 0,
    },
    plays: {
      type: Number,
      default: 0,
    },
    alreadyRead: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
chapterSchema.plugin(toJSON);
chapterSchema.plugin(paginate);

const Chapter = mongoose.model('Chapter', chapterSchema);

module.exports = Chapter;
