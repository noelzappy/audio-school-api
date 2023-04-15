const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    publicationDate: {
      type: Date,
      required: true,
    },

    author: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
      default: '',
    },
    plays: {
      type: Number,
      default: 0,
    },
    likes: {
      type: Number,
      default: 0,
    },
    dislikes: {
      type: Number,
      default: 0,
    },
    category: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Category',
      required: true,
    },
    cover: {
      type: String,
      trim: true,
      default: '',
    },
    numberOfChapters: {
      type: Number,
      default: 0,
    },
    numberOfPages: {
      type: Number,
      default: 0,
    },

    alreadyRead: {
      type: Boolean,
      default: false,
    },
    grade: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Grade',
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
bookSchema.plugin(toJSON);
bookSchema.plugin(paginate);

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
