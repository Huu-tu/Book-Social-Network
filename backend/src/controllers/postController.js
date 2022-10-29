const Post = require('../models/postModel');
const Account = require('../models/accountModel');
const Comment = require('../models/cmtModel');

class postController{
  //[GET] /post/detailPost/:id
  async detailPost(req,res){
    Post.findOne({_id: req.params.id})
      .then((data) =>{
        res.json(data)
      })
      .catch((err) =>{
        res.json("Failed")
      });
  }

  async showPost(req,res){
    // const Authorization = req.headers["authorization"];
    // const token = Authorization.split(" ")[1];
    // console.log(token)
    const data = await Post.find()
    if(data){
      res.json(data)
      // console.log(data)
    }else{
      console.log("Failed")
    }
  }

  async getAuthor(req,res){
    Post.findOne({_id: req.params.id})
      .then((data) =>{
        res.json(data)
      })
      .catch((err) =>{
        res.json("Failed")
      });
  }

  async createPost(req,res){
    let author = req.body.author;
    let description = req.body.description;
    let image = req.file.filename;

    const data = await Post.create({
      description,
      author,
      image
    })

    if (data){
      res.json("Success");
    }else {
      res.json("Failed")
    }
  }

  async likePost(req,res){
    try{
      const { id } = req.body;
      const post = await Post.findOne({id})
      let userId = req.user._id.toString();
      const postLike = post.likes;
      if (postLike.includes(userId)){
        console.log('Post already liked')
        // res.json('Post already liked')
      }else {
        postLike.unshift(req.user._id);
        await post.save();
        console.log('Idea liked');
        // res.json('Idea liked')
      }
    }catch (err){
      console.log('Server Error', err);
      // res.json('Server Error')
    }
  }

  async disLikePost(req,res){
    try{
      const { id } = req.body;
      const post = await Post.findOne({id})
      let userId = req.user._id.toString();
      const postLike = post.likes;
      if (postLike.includes(userId)){
        const removeIndex = postLike
          .map((like) => like.toString())
          .indexOf(userId);

        postLike.splice(removeIndex, 1);
        // idea.vote -= 1;
        await post.save();
        res.json(postLike);
        console.log('Idea Unliked');
        // res.json('Post already liked')
      }else {
        console.log('Post not been liked');
        // res.json('Idea liked')
      }
    }catch (err){
      console.log('Server Error', err);
    }
  }

  async cmtGet(req,res){
    const _id = req.params.id;
    const  Cmt = await Comment.findOne({_id: _id})
        // res.json(data)
        // console.log(Cmt.author)
    if (Cmt) {
      const Author = await Account.findOne({_id: Cmt.author})
      // console.log(Cmt.content,  Author.fullName)
      res.json({content: Cmt.content, author: Author.fullName})
    }else {
      res.json("Don't have")
    }
  }

  async cmtPost(req,res){
    try{
      const content = req.body.content;
      const authorId = req.body.author;
      const postId = req.body.post;

      const formData = {
        content,
      };

      const post = await Post.findOne({_id:postId})

      const author = await Account.findOne({_id: authorId})

      formData.author = author._id
      formData.post = post._id

      Comment.create(formData, (error, item) =>{
        item.save();

        post.comments.push(item);
        post.save();
      })
    }catch (err){
      console.log("Thap bai")
    }
  }

  async unCmtPost(req,res){
    try{

    }catch (err){

    }
  }
}

module.exports = new postController();