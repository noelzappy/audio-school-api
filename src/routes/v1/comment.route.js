const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { commentValidation } = require('../../validations');
const { commentController } = require('../../controllers');

const router = express.Router();

router
  .route('/')
  .post(auth(), validate(commentValidation.createComment), commentController.createComment)
  .get(auth(), validate(commentValidation.getComments), commentController.getComments);

router
  .route('/:commentId')
  .get(auth(), validate(commentValidation.getComment), commentController.getComment)
  .put(auth(), validate(commentValidation.updateComment), commentController.updateComment)
  .delete(auth(), validate(commentValidation.deleteComment), commentController.deleteComment);

module.exports = router;
