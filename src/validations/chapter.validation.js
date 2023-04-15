const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createChapter = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string(),
    book: Joi.string().required().custom(objectId),
    transcription: Joi.string(),
    audio: Joi.string(),
  }),
};

const getChapters = {
  query: Joi.object().keys({
    title: Joi.string(),
    book: Joi.string().custom(objectId),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getChapter = {
  params: Joi.object().keys({
    chapterId: Joi.string().custom(objectId),
  }),
};

const updateChapter = {
  params: Joi.object().keys({
    chapterId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      title: Joi.string(),
      description: Joi.string(),
      book: Joi.string().custom(objectId),
      transcription: Joi.string(),
      audio: Joi.string(),
    })
    .min(1),
};

const deleteChapter = {
  params: Joi.object().keys({
    chapterId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createChapter,
  getChapters,
  getChapter,
  updateChapter,
  deleteChapter,
};
