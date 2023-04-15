const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { bookValidation } = require('../../validations');
const { bookController } = require('../../controllers');
const upload = require('../../middlewares/upload');

const router = express.Router();

router
  .route('/')
  .post(auth('manageBooks'), upload.single('cover'), validate(bookValidation.createBook), bookController.createBook)
  .get(auth(), validate(bookValidation.getBooks), bookController.getBooks);

router
  .route('/:bookId')
  .get(auth(), validate(bookValidation.getBook), bookController.getBook)
  .put(auth('manageBooks'), upload.single('cover'), validate(bookValidation.updateBook), bookController.updateBook)
  .delete(auth('manageBooks'), validate(bookValidation.deleteBook), bookController.deleteBook);

module.exports = router;
