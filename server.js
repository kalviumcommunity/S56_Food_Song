const express = require('express')
const app = express()
require("dotenv").config()
// 1. Read the connection parameters from config.js.
// 2. Use Mongoose to connect to the MongoDB database.
// 3. Export the Mongoose connection object.
const config = require('./config.js')
const mongoose = require('mongoose');
const mongoURI = config.mongoURI
const port = process.env.PUBLIC_PORT

// define the ping route
app.get('/ping', (req, res) => {
	res.send('pong')
})


const connectToDB = async () => {
  try {
    //  Your code goes here
    await mongoose.connect(mongoURI)
    console.log('📦 connected to mongoDB');
  } catch (err) {
    console.error('❌ error connecting to mongoDB:', err.message);
  }
};

const disconnectFromDB = async () => {
  try {
    //  Your code goes here
    await mongoose.disconnect(mongoURI)
    console.log('📦 disconnected from mongoDB');
  } catch (err) {
    console.error('❌ error disconnecting from mongoDB:', err.message);
  }
};

module.exports = {
  connectToDB,
  disconnectFromDB,
  mongooseConnection: mongoose.connection,
};


if (require.main === module) {
	app.listen(port, () => {
		console.log(`🚀 server running on PORT: ${port}`)
	})
}

module.exports = app
