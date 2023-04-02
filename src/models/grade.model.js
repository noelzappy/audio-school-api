const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const gradeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      default: '',
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json

gradeSchema.plugin(toJSON);
gradeSchema.plugin(paginate);

const Grade = mongoose.model('Grade', gradeSchema);

module.exports = Grade;
