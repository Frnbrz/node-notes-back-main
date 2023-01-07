const mongoose = require('mongoose')
const { Schema, model } = mongoose

const uri =
  'mongodb+srv://frnbrz:<0Z4UEDQBy6KcKO5P>@cluster0.xygy5ef.mongodb.net/notes?retryWrites=true&w=majority'

mongoose.connect(uri).then(() => {
  console.log('Connected to MongoDB')
})

const noteSchema = new Schema({
  content: String,
  date: Date,
  important: Boolean
})

const Note = model('Note', noteSchema)
