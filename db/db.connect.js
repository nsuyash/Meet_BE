const mongoose = require('mongoose')

const mongoUrl = process.env.MONGODB_URL

const initializeDatabase = () => {
  try {
    const connected = mongoose.connect(mongoUrl,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    if(connected){
      console.log('Connected successfully.')
    }
  } catch (error) {
    console.log('Connection failed.')
  }
};

module.exports = {initializeDatabase}
