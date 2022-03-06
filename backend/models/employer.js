const mongoose = require('mongoose')

const Schema = mongoose.Schema

const employerSchema = new Schema({
  companyName: {
    type: String,
    required: true,
  },
  fullRepName: {
    type: String,
    required: true,
  },
  repPosition: {
    type: String,
    required: true,
  },
  pib: {
    type: Number,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  jobs: {
    type: Array,
    required: true,
  },
})

module.exports = mongoose.model('Employer', employerSchema)
