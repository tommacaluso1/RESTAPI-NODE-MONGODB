const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//GETS ALL THE POSTS
router.get("/", async (req,res,) =>{
    try{
        const posts = await Post.find();
        res.json(posts);

    }catch(err){
        res.json({message:err})
    }
});



//SUBMITS A POST
router.post("/", async (req,res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try{
    const savedPost = await post.save()
    res.json(savedPost);
    }catch(err){
        res.json({message:err});
    }
});

//SPECIFIC POST
router.get("/:postID", async  (req,res) =>{
  try{
  const post = await Post.findById(req.params.postID)
  res.json(post)
  }catch(err){
      res.json({message:err});
  }
})

//DELETE A POST
router.delete("/:postID", async (req,res) =>{
    try{
    const removePost = await  Post.remove({_id: req.params.postID})
    res.json(removePost)
    }catch(err){
        res.json({message:err});
    }
});


//UPDATE A POST 
router.patch("/:postID", async (req,res) => {
    try{
        const updatedPost = await Post.updateOne(
             {_id: req.params.postID},
             {$set: {title: req.body.title }}
             );
        res.json(updatedPost)
    }catch (err){
        res.json({message:err});
    }
})




module.exports = router;



