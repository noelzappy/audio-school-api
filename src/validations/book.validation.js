const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createBook = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string(),
    author: Joi.string(),
    grade: Joi.string().custom(objectId),
    category: Joi.string().custom(objectId).required(),
    numberOfPages: Joi.number().integer(),
    numberOfChapters: Joi.number().integer(),
    cover: Joi.any(),
    publicationDate: Joi.date(),
  }),
};

const getBooks = {
  query: Joi.object().keys({
    title: Joi.string(),
    category: Joi.string().custom(objectId),
    grade: Joi.string().custom(objectId),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getBook = {
  params: Joi.object().keys({
    bookId: Joi.string().custom(objectId),
  }),
};

const updateBook = {
  params: Joi.object().keys({
    bookId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      title: Joi.string(),
      description: Joi.string(),
      author: Joi.string(),
      grade: Joi.string().custom(objectId),
      category: Joi.string().custom(objectId),
      numberOfPages: Joi.number().integer(),
      numberOfChapters: Joi.number().integer(),
      cover: Joi.any(),
      publicationDate: Joi.date(),
    })
    .min(1),
};

const deleteBook = {
  params: Joi.object().keys({
    bookId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createBook,
  getBooks,
  getBook,
  updateBook,
  deleteBook,
};
