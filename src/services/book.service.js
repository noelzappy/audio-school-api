const httpStatus = require('http-status');
const { Book } = require('../models');
const ApiError = require('../utils/ApiError');

const createBook = async (bookBody) => {
  const book = await Book.create(bookBody);
  return book;
};

const queryBooks = async (filter, options) => {
  const books = await Book.paginate(filter, options);
  return books;
};

const getBookById = async (id) => {
  return Book.findById(id);
};

const updateBookById = async (bookId, updateBody) => {
  const book = await getBookById(bookId);
  if (!book) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Book not found');
  }
  Object.assign(book, updateBody);
  await book.save();
  return book;
};

const deleteBookById = async (bookId) => {
  const book = await getBookById(bookId);
  if (!book) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Book not found');
  }
  await book.remove();
  return book;
};

module.exports = {
  createBook,
  queryBooks,
  getBookById,
  updateBookById,
  deleteBookById,
};
