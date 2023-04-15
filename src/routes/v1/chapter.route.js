const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { chapterValidation } = require('../../validations');
const { chapterController } = require('../../controllers');

const router = express.Router();

router
  .route('/')
  .post(auth('manageChapters'), validate(chapterValidation.createChapter), chapterController.createChapter)
  .get(auth(), validate(chapterValidation.getChapters), chapterController.getChapters);

router
  .route('/:chapterId')
  .get(auth(), validate(chapterValidation.getChapter), chapterController.getChapter)
  .put(auth('manageChapters'), validate(chapterValidation.updateChapter), chapterController.updateChapter)
  .delete(auth('manageChapters'), validate(chapterValidation.deleteChapter), chapterController.deleteChapter);

module.exports = router;
