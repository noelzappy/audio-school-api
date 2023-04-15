const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createChapterPlay = {
  body: Joi.object().keys({
    chapter: Joi.string().custom(objectId).required(),
    playedTime: Joi.number().required(),
  }),
};

const getChapterPlays = {
  query: Joi.object().keys({
    chapter: Joi.string().custom(objectId),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getChapterPlay = {
  params: Joi.object().keys({
    chapterPlayId: Joi.string().custom(objectId),
  }),
};

const updateChapterPlay = {
  params: Joi.object().keys({
    chapterPlayId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      chapter: Joi.string().custom(objectId),
      playedTime: Joi.number(),
    })
    .min(1),
};

const deleteChapterPlay = {
  params: Joi.object().keys({
    chapterPlayId: Joi.string().custom(objectId),
  }),
};

const getChapterPlayByChapterAndUser = {
  params: Joi.object().keys({
    chapterId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createChapterPlay,
  getChapterPlays,
  getChapterPlay,
  updateChapterPlay,
  deleteChapterPlay,
  getChapterPlayByChapterAndUser,
};
