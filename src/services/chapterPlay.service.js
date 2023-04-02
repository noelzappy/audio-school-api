const httpStatus = require('http-status');
const { ChapterPlay } = require('../models');
const ApiError = require('../utils/ApiError');

const createChapterPlay = async (chapterPlayBody) => {
  const chapterPlay = await ChapterPlay.create(chapterPlayBody);
  return chapterPlay;
};

const queryChapterPlays = async (filter, options) => {
  const chapterPlays = await ChapterPlay.paginate(filter, options);
  return chapterPlays;
};

const getChapterPlayById = async (id) => {
  return ChapterPlay.findById(id);
};

const updateChapterPlayById = async (chapterPlayId, updateBody) => {
  const chapterPlay = await getChapterPlayById(chapterPlayId);
  if (!chapterPlay) {
    throw new ApiError(httpStatus.NOT_FOUND, 'ChapterPlay not found');
  }
  Object.assign(chapterPlay, updateBody);
  await chapterPlay.save();
  return chapterPlay;
};

const deleteChapterPlayById = async (chapterPlayId) => {
  const chapterPlay = await getChapterPlayById(chapterPlayId);
  if (!chapterPlay) {
    throw new ApiError(httpStatus.NOT_FOUND, 'ChapterPlay not found');
  }

  await chapterPlay.remove();
  return chapterPlay;
};

module.exports = {
  createChapterPlay,
  queryChapterPlays,
  getChapterPlayById,
  updateChapterPlayById,
  deleteChapterPlayById,
};
