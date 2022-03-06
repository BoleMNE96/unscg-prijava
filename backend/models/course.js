const mongoose = require('mongoose')

const Schema = mongoose.Schema

const courseSchema = new Schema({
  course_name: {
    type: String,
    required: true,
  },
  school_id: {
    type: Schema.Types.ObjectId,
    ref: 'School',
    required: true,
  },
})

module.exports = mongoose.model('Course', courseSchema)
