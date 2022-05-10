const express=require('express')
const bodyParser =require('body-parser')
const cors = require('cors')
require('./config/database/connexion')
const postsRoutes = require('./routes/posts')
require("dotenv").config()

const app=express()

//static folders
app.use(express.static('uploads'))
app.use(express.static('public'));

//setup
app.use(bodyParser.json({limit:"50mb",extended:true}))
//app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));

app.use(cors())



//routes
app.get('/',(req,res)=>res.json({"message":"home page"}))
app.use('/posts',postsRoutes);


//server listening

const PORT=process.env.PORT || 5000
app.listen(PORT,()=>console.log(`server is runing on the port ${PORT}`))