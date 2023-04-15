const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { chapterPlayService } = require('../services');

const createChapterPlay = catchAsync(async (req, res) => {
  const chapterPlay = await chapterPlayService.createChapterPlay(req.body);
  res.status(httpStatus.CREATED).send(chapterPlay);
});

const getChapterPlays = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['title', 'book']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await chapterPlayService.queryChapterPlays(filter, options);
  res.send(result);
});

const getChapterPlay = catchAsync(async (req, res) => {
  const chapterPlay = await chapterPlayService.getChapterPlayById(req.params.chapterPlayId);
  if (!chapterPlay) {
    throw new ApiError(httpStatus.NOT_FOUND, 'ChapterPlay not found');
  }
  res.send(chapterPlay);
});

const updateChapterPlay = catchAsync(async (req, res) => {
  const chapterPlay = await chapterPlayService.updateChapterPlayById(req.params.chapterPlayId, req.body);
  res.send(chapterPlay);
});

const deleteChapterPlay = catchAsync(async (req, res) => {
  await chapterPlayService.deleteChapterPlayById(req.params.chapterPlayId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createChapterPlay,
  getChapterPlays,
  getChapterPlay,
  updateChapterPlay,
  deleteChapterPlay,
};
