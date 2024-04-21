require('dotenv').config()

const express = require('express')
const {Router} = require('./root.js')
const cors = require('cors');
const mongoose = require('mongoose');
const {UserModel,UserDetail} = require('./models/user.js')
const app = express();
const Joi = require('joi')
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken')
app.use(cookieParser());

app.use(express.json())
app.use(cors());
require("dotenv").config()


const mongoURI = process.env.mongoURI
console.log(mongoURI)
const port = process.env.PUBLIC_PORT



const createSchema = Joi.object({
  img: Joi.string().required(),
  song: Joi.string().required(),
  food: Joi.string().required()
})  

app.post("/createUser",async(req,res)=>{
  try{
    const {error, value} = createSchema.validate(req.body,{abortEarly: false})

    if(error){
      console.log(error);
      return res.send(error.details)
    }
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
    res.send(data,"getting the data")
  }catch (error) {
    res.send(error) 
   }
})

app.delete('/deleteUser/:id',async(req,res)=>{
  try{
    const id = req.params.id;
    console.log(id)
    let data = await UserModel.findByIdAndDelete({_id:id})
    res.send(data,'User deleted successfully')
  }
  catch (error){
    res.send(error) 
  }
})

app.post('/auth', async (req, res) => {
  try {
      const { username } = req.body;
      const user ={
        "username": username
      }
       const accessToken = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
       res.json(accessToken)
       
      res.send(user)
  } catch (error) {
      console.log(error);
  }
});

app.get('/username',async(req,res)=>{
  try{
    let data = await UserDetail.find()
    console.log(data)
    res.send(data)
  }catch(error){
    res.send(error)
  }
})


app.post("/addUsername", async (req, res) => {
  try {
    let response = await UserDetail.create(req.body);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

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