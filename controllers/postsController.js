const Post = require('../models/Post')


const getPosts=(req,res)=>{
    Post.find()
        .then((posts)=>res.status(200).json(posts))
        .catch(err=>res.status(404).json({message:err.message}))
}

const createPost=(req,res)=>{
    console.log('file uploaded create', req.file)

    const post ={
        title:req.body.title,
        message:req.body.message,
        creator:req.body.creator,
        tags:req.body.tags,
        selectedFile:req.file.filename
    };
    const newPost=new Post(post)
    newPost.save()
        .then((postItem)=>{            
                res.status(201).json(postItem)})
                      //res.redirect('/posts')  )
        .catch(err=>res.status(409).json({message:err.message}))
}

const removePost=(req, res)=>{
    Post.findByIdAndDelete(req.params.id)
    .then(post=>{
        res.status(204).json(post) 
        //res.redirect('/posts')
    })
    .catch(err=>res.status(409).json({message:err.message}))
}

const updatePost=(req,res)=>{
    const {id}= req.params
    console.log('file uploaded update', req.file)
    const post ={
        title:req.body.title,
        message:req.body.message,
        creator:req.body.creator,
        tags:req.body.tags,
        //selectedFile:req.file.filename,
        _id:id
    };
    if(req.file){
        post.selectedFile=req.file.filename
    }
    Post.findByIdAndUpdate(id,post)
        .then(response=>{
            res.status(200).json(post)
        })
        .catch(err=>console.log(err))

}

const likePost=async(req,res)=>{
    try {
        const {id}=req.params
        const updatePost=await Post.findById(id)    
        const post = await Post.findByIdAndUpdate(id,{likeCount:updatePost.likeCount+1})
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error)        
    }
    
}

module.exports ={getPosts, createPost, removePost, updatePost, likePost}