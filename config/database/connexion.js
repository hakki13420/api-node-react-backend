const mongoose=require("mongoose")
require("dotenv").config()

const url=process.env.URL_CONNEXION

mongoose.connect(url,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>console.log('connected to database'))
    .catch(err=>console.log(err.message))
//mongoose.use({useFindAndModify:false})