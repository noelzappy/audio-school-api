const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createComment = {
  body: Joi.object().keys({
    text: Joi.string().required(),
    book: Joi.string().custom(objectId),
    chapter: Joi.string().custom(objectId),
  }),
};

const getComments = {
  query: Joi.object().keys({
    text: Joi.string(),
    book: Joi.string().custom(objectId),
    chapter: Joi.string().custom(objectId),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getComment = {
  params: Joi.object().keys({
    commentId: Joi.string().custom(objectId),
  }),
};

const updateComment = {
  params: Joi.object().keys({
    commentId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      text: Joi.string(),
      book: Joi.string().custom(objectId),
      chapter: Joi.string().custom(objectId),
    })
    .min(1),
};

const deleteComment = {
  params: Joi.object().keys({
    commentId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createComment,
  getComments,
  getComment,
  updateComment,
  deleteComment,
};
