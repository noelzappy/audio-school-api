const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { gradeValidation } = require('../../validations');
const { gradeController } = require('../../controllers');

const router = express.Router();

router
  .route('/')
  .post(auth('manageGrades'), validate(gradeValidation.createGrade), gradeController.createGrade)
  .get(auth(), validate(gradeValidation.getGrades), gradeController.getGrades);

router
  .route('/:gradeId')
  .get(auth(), validate(gradeValidation.getGrade), gradeController.getGrade)
  .put(auth('manageGrades'), validate(gradeValidation.updateGrade), gradeController.updateGrade)
  .delete(auth('manageGrades'), validate(gradeValidation.deleteGrade), gradeController.deleteGrade);

module.exports = router;
