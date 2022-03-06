const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  city_id: {
    type: Schema.Types.ObjectId,
    ref: 'City',
    required: true,
  },
})

module.exports = mongoose.model('User', userSchema)
