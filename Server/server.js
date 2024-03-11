const express = require('express')
const {Router} = require('./root.js')
const cors = require('cors');
const mongoose = require('mongoose');
const UserModel = require('./models/user.js')
const app = express();

require("dotenv").config()
app.use(cors());
app.use(express.json())

// 1. Read the connection parameters from config.js.
// 2. Use Mongoose to connect to the MongoDB database.
// 3. Export the Mongoose connection object.
// const config = require('./config.js')

const mongoURI = process.env.mongoURI
console.log(mongoURI)
const port = process.env.PUBLIC_PORT

app.get('/getUser', (req, res) => {
  UserModel.find()
    .then(users => res.json(users))
    .catch(err => res.json(err));
});

// app.use('/',Root)

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


if (require.main === module) {
  
	app.listen(port, () => {
    connectToDB()
		console.log(`🚀 server running on PORT: ${port}`)
	})
}





module.exports = app
