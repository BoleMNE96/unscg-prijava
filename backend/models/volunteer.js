const mongoose = require('mongoose')

const Schema = mongoose.Schema

const volunteerSchema = new Schema({
  // id: {
  //   type: Number,
  //   required: true,
  // },
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  jmbg: {
    type: Number,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  city: {
    type: Schema.Types.ObjectId,
    ref: 'City',
    required: true,
  },
  school: {
    type: Schema.Types.ObjectId,
    ref: 'School',
    required: true,
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
  },
})

module.exports = mongoose.model('Volunteer', volunteerSchema)

// const { DataTypes, Sequelize } = require('sequelize')

// const sequelize = require('../database')

// const Volunteer = sequelize.define('volunteer', {
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     unique: true,
//     allowNull: false,
//     primaryKey: true,
//   },
//   fullName: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//     validate: { isEmail: true },
//   },
//   jmbg: {
//     type: DataTypes.BIGINT,
//     allowNull: false,
//   },
//   phone: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   city: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   school: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   course: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// })

// module.exports = Volunteer
