const mongoose = require('mongoose')

const Schema = mongoose.Schema

const schoolSchema = new Schema({
  school_name: {
    type: String,
    required: true,
  },
  city_id: {
    type: Schema.Types.ObjectId,
    ref: 'City',
    required: true,
  },
})

module.exports = mongoose.model('School', schoolSchema)
