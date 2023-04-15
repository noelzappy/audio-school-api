const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { chapterPlayValidation } = require('../../validations');
const { chapterPlayController } = require('../../controllers');

const router = express.Router();

router
  .route('/')
  .post(auth(), validate(chapterPlayValidation.createChapterPlay), chapterPlayController.createChapterPlay)
  .get(auth(), validate(chapterPlayValidation.getChapterPlays), chapterPlayController.getChapterPlays);

router
  .route('/:chapterPlayId')
  .get(auth(), validate(chapterPlayValidation.getChapterPlay), chapterPlayController.getChapterPlay)
  .put(auth(), validate(chapterPlayValidation.updateChapterPlay), chapterPlayController.updateChapterPlay)
  .delete(auth(), validate(chapterPlayValidation.deleteChapterPlay), chapterPlayController.deleteChapterPlay);

module.exports = router;
