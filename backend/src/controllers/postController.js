const Post = require('../models/postModel');
const Comment = require('../models/cmtModel');
const Account = require('../models/accountModel');

class postController {
  //[GET] /post/detailPost/:id
  async detailPost(req, res) {
    Post.findOne({ _id: req.params.id })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json('Failed');
      });
  }

  async showPost(req, res) {
    const data = await Post.find();
    if (data) {
      res.json(data);
      // console.log(data)
    } else {
      console.log('Failed');
    }
  }

  async showOpinionPost(req, res) { 
    const data = await Post.find({type: 'Opinion'});
    if (data) {
      res.json(data);
      // console.log(data)
    } else {
      console.log('Failed');
    }  
  }

  async showBookPost(req, res) {
    const data = await Post.find({type: 'Book'});
    if (data) {
      res.json(data);
      // console.log(data)
    } else {
      res.json('Failed');
    }
  }

  async showMostReadPosts(req, res) {
    const posts = await Post.find().sort({ likes: -1 }).limit(1);
    return res.json(posts);
  }

  async showRanDomReadPosts(req, res) {
    const posts = await Post.find().sort({ datetime: -1 }).limit(1);
    return res.json(posts);
  }

  async getAuthor(req, res) {
    Post.findOne({ _id: req.params.id })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json('Failed');
      });
  }

  async getSinglePost(req, res) {
    let _id = req.params.id;

    await Post.find({ authorId: { $in: `${_id}` } })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async createPost(req, res) {
    let title = req.body.title;
    let authorId = req.body.authorId;
    let authorName = req.body.authorName;
    let avatar = req.body.avatar;
    let description = req.body.description;
    let type = req.body.type;
    let image = req.file.filename;

    const data = await Post.create({
      title,
      authorId,
      description,
      type,
      authorName,
      avatar,
      image,
    });

    if (data) {
      return res.status(200).json('Success');
    } else {
      res.json('Failed');
    }
  }

  async updatePost(req, res) {
    let _id = req.body._id;
    let title = req.body.title;
    let description = req.body.description;

    if (_id) {
      const post = await Post.findOneAndUpdate(
        { _id: _id },
        {
          title,
          description,
        },
      );
      res.json({ post });
    } else {
      console.log('Ko');
    }
  }

  async deletePost(req, res) {
    const _id = req.params.id;

    if (_id) {
      await Post.findOneAndDelete({ _id: _id });
    } else {
      console.log('Ko');
    }
  }

  async likePost(req, res) {
    try {
      const { id } = req.body;
      const post = await Post.findOne({ _id: id });
      const userId = req.user._id;
      const postLike = post.likes;
      if (postLike.includes(userId)) {
        console.log('Post already liked');
        // res.json('Post already liked')
      } else {
        postLike.unshift(userId);
        await post.save();
        // console.log('Idea liked');
        return res.json({
          userId,
          post,
        });
      }
    } catch (err) {
      console.log('Server Error', err);
      // res.json('Server Error')
    }
  }

  async disLikePost(req, res) {
    try {
      const { id } = req.body;
      // const  _id  = id.IdPost;
      const post = await Post.findOne({ _id: id });
      let userId = req.user._id;
      const postLike = post.likes;
      if (postLike.includes(userId)) {
        const removeIndex = postLike
          .map((like) => like.toString())
          .indexOf(userId);

        postLike.splice(removeIndex, 1);
        // idea.vote -= 1;
        await post.save();
        res.json(postLike);
        console.log('Idea Unliked');
        // res.json('Post already liked')
      } else {
        console.log('Post not been liked');
        // res.json('Idea liked')
      }
    } catch (err) {
      console.log('Server Error', err);
    }
  }

  async cmtGet(req, res) {
    const _id = req.params.id;
    const Cmt = await Comment.findOne({ _id: _id });
    // res.json(data)
    // console.log(Cmt.author)
    if (Cmt) {
      const Author = await Account.findOne({ _id: Cmt.author });
      // console.log(Cmt.content,  Author.fullName)
      res.json({ _id: _id, content: Cmt.content, author: Author.fullName });
    } else {
      res.json("Don't have");
    }
  }

  async cmtPost(req, res) {
    try {
      const content = req.body.content;
      const authorId = req.body.author;
      const _id = req.body.post;

      const formData = {
        content,
      };

      const post = await Post.findOne({ _id });

      const author = await Account.findOne({ _id: authorId });

      formData.author = author._id;
      formData.post = post._id;

      Comment.create(formData, (error, item) => {
        item.save();

        post.comments.push(item);
        post.save();
      });
    } catch (err) {
      console.log('Server Error', err);
    }
  }

  async cmtUpdatePost(req, res) {
    let id = req.params.id;

    await Comment.findByIdAndUpdate({ _id: id });
  }

  async cmtDeletePost(req, res) {
    let id = req.params.id;

    await Comment.findOneAndDelete({ _id: id });
  }

  async savePost(req, res) {
    try {
      const { id } = req.body;
      const userId = req.user._id;
      const user = await Account.findOne({ _id: userId });
      const savedUser = user.saved;
      if (savedUser.includes(id)) {
        // console.log('Post already liked');
        res.json('you have already save this post')
      } else {
        savedUser.unshift(id);
        await user.save();
        // console.log('Idea liked');
        return res.json({
          userId,
          id,
        });
      }
    } catch (err) {
      console.log('Server Error', err);
      // res.json('Server Error')
    }
  }

  async unSavePost(req, res) {
    try {
      const { id } = req.body;
      let userId = req.user._id;
      const user = await Account.findOne({ _id: userId });
      const savedUser = user.saved;
      if (savedUser.includes(id)) {
        const removeIndex = savedUser
          .map((saved) => saved.toString())
          .indexOf(id);

          savedUser.splice(removeIndex, 1);
        // idea.vote -= 1;
        await user.save();
        res.json('Thanh cong');
      } else {
        res.json('Post not been saved')
      }
    } catch (err) {
      console.log('Server Error', err);
    }
  }

  async getSavedPost(req, res) {
    const user = req.user._id;

    const savedUser = await Account.findOne({
      _id: user,
    }).sort('createdAt').populate('saved','_id title  authorName avatar description image createAt');

    const result = savedUser.saved;

    res.json(result);
  }

  async hidePost(req, res) {
    let id = req.params.id;

    await Comment.findOneAndDelete({ _id: id });
  }

  async unHidePost(req, res) {
    let id = req.params.id;

    await Comment.findOneAndDelete({ _id: id });
  }

  async reportPost(req, res) {
    let id = req.params.id;

    await Comment.findOneAndDelete({ _id: id });
  }
}

module.exports = new postController();
