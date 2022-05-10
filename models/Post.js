const express=require('express')
const mongoose=require('mongoose')

const postSchema=mongoose.Schema({
    title:String,        
    message:String,        
    creator:String,        
    tags:[String],
    selectedFile:String,
    likeCount:{
        type:Number,
        default:0
    },
    createAt:{
        type:Date,
        default:new Date()
    }
},
{
    timestamps:true
})

const Post=mongoose.model('Post',postSchema,'posts');

module.exports = Post;