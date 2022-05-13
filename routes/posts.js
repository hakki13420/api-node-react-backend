const express=require('express')
const router=express.Router()
const {getPosts, createPost, removePost, updatePost, likePost} = require('../controllers/postsController')
const multer = require('multer')
const upload = require('../middleware/upload')

router.get('/',getPosts)

router.post('/',upload,createPost);

router.delete('/:id', removePost)

router.put('/:id',upload, updatePost)

router.put('/like/:id',likePost);

module.exports =router