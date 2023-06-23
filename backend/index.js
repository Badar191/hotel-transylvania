const express = require('express');
const mongoose = require('mongoose');

// const Room = require('./roomSchema');
const cors = require('cors');
const signUpRoutes = require('./routes/signup');
// Create Express app
const app = express();
app.use(express.json());
app.use(cors())

mongoose.connect('mongodb+srv://badar191:sUWq8a3Ziqyvhhow@cluster0.0thtj3l.mongodb.net/')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


// app.use('/api/rooms' , roomRoutes)
app.use('/api/signup', signUpRoutes)
// app.use('/api/',)


// app.post('/', (req, res) => {

// })



app.listen(3000, () => {
  console.log('app listening on port 3000')
})















  