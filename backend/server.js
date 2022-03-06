const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

const mongoose = require('mongoose')

dotenv.config()

const app = express()

app.use(express.json())

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
)
const volunteerRoutes = require('./routes/volunteer')
const cityRoutes = require('./routes/city')
const schoolRoutes = require('./routes/school')
const userRoutes = require('./routes/user')
const courseRoutes = require('./routes/course')
const employerRoutes = require('./routes/employer')

app.use(
  volunteerRoutes,
  employerRoutes,
  cityRoutes,
  schoolRoutes,
  userRoutes,
  courseRoutes
)

app.get('/', (req, res) => {
  res.send('API is running')
})

const PORT = process.env.PORT || 5000

mongoose
  .connect(
    'mongodb+srv://unscg:sjMu1Nm6CQs3wDF1@cluster0.tfmak.mongodb.net/unscg?retryWrites=true&w=majority'
  )
  .then((result) => {
    app.listen(
      PORT,
      console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
      )
    )
  })
  .catch((err) => {
    console.log(err)
  })
