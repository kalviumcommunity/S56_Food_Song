const express = require('express')
const {Router} = require('./root.js')
const cors = require('cors');
const mongoose = require('mongoose');
const UserModel = require('./models/user.js')
const app = express();

app.use(express.json())
app.use(cors());
require("dotenv").config()


const mongoURI = process.env.mongoURI
console.log(mongoURI)
const port = process.env.PUBLIC_PORT

app.post("/createUser",async(req,res)=>{
  try{
    const newUser = await UserModel.create(req.body);
    res.send(newUser)
  }
  catch(error){
    res.send(error);
  }
});

app.get('/getUser', async(req, res) => {
  try {
    let data = await UserModel.find()
    console.log(data)
   res.send(data)
  } catch (error) {
   res.send(error) 
  }
  
});

app.get('/getUser/:id',async(req,res)=>{
  try{
    const id = req.params.id;
    console.log(id)
    let data = await UserModel.findById({_id:id})
    res.send(data)
  }catch (error) {
    res.send(error) 
   }
})

app.put('/updateUser/:id',async(req,res)=>{
  try{
    const id = req.params.id;
    console.log(id)
    let data = await UserModel.findByIdAndUpdate({_id:id},req.body,{new:true})
    res.send(data)
  }catch (error) {
    res.send(error) 
   }
})


//1make same like above with diff endpoint
app.get('/create',async(req,res)=>{
  try{
    let info = await UserModel.find()
    res.send(info)
  }catch(error){
    res.send(error)
  }
})
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