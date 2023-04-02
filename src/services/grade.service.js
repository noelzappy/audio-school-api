const httpStatus = require('http-status');
const { Grade } = require('../models');
const ApiError = require('../utils/ApiError');

const createGrade = async (gradeBody) => {
  const grade = await Grade.create(gradeBody);
  return grade;
};

const queryGrades = async (filter, options) => {
  const grades = await Grade.paginate(filter, options);
  return grades;
};

const getGradeById = async (id) => {
  return Grade.findById(id);
};

const updateGradeById = async (gradeId, updateBody) => {
  const grade = await getGradeById(gradeId);
  if (!grade) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Grade not found');
  }
  Object.assign(grade, updateBody);
  await grade.save();
  return grade;
};

const deleteGradeById = async (gradeId) => {
  const grade = await getGradeById(gradeId);
  if (!grade) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Grade not found');
  }
  await grade.remove();
  return grade;
};

module.exports = {
  createGrade,
  queryGrades,
  getGradeById,
  updateGradeById,
  deleteGradeById,
};
