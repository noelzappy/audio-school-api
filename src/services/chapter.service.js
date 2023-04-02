const httpStatus = require('http-status');
const { Chapter } = require('../models');
const ApiError = require('../utils/ApiError');

const createChapter = async (chapterBody) => {
  const chapter = await Chapter.create(chapterBody);
  return chapter;
};

const queryChapters = async (filter, options) => {
  const chapters = await Chapter.paginate(filter, options);
  return chapters;
};

const getChapterById = async (id) => {
  return Chapter.findById(id);
};

const updateChapterById = async (chapterId, updateBody) => {
  const chapter = await getChapterById(chapterId);
  if (!chapter) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Chapter not found');
  }
  Object.assign(chapter, updateBody);
  await chapter.save();
  return chapter;
};

const deleteChapterById = async (chapterId) => {
  const chapter = await getChapterById(chapterId);
  if (!chapter) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Chapter not found');
  }
  await chapter.remove();
  return chapter;
};

module.exports = {
  createChapter,
  queryChapters,
  getChapterById,
  updateChapterById,
  deleteChapterById,
};
