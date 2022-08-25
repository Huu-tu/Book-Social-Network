const Book = require('../models/bookModel');
const Account = require('../models/accountModel');
const Comment = require('../models/cmtModel');

class bookController{
  //[GET] /book/detailBook/:id
  async detailBook(req,res){
    Book.findOne({_id: req.params.id})
      .then((data) =>{
        res.json(data)
      })
      .catch((err) =>{
        res.json("Failed")
      });
  }

  async showBook(req,res){
    // const Authorization = req.headers["authorization"];
    // const token = Authorization.split(" ")[1];
    // console.log(token)
    const data = await Book.find()
    if(data){
      res.json(data)
      // console.log(data)
    }else{
      console.log("Failed")
    }
  }

  async createBook(req,res){
    let bookTitle = req.body.bookTitle;
    let description = req.body.description;
    let author = req.body.author;
    let language = req.body.language;
    // let image = req.image.originalname;
    let image = req.file.filename;
    // let image = {
    //   data: fs.readFileSync("uploads/" + req.file.filename),
    //   contentType: "image/png",
    // }

    const data = await Book.create({
      bookTitle,
      description,
      author,
      language,
      image
    })

    if (data){
      res.json("Success");
    }else {
      res.json("Failed")
    }
  }

  async updateBook(req,res){

  }

  async deleteBook(req,res){

  }

  async likeBook(req,res){
    try{
      const { id } = req.body;
      const book = await Book.findOne({id})
      let userId = req.user._id.toString();
      const bookLike = book.likes;
      if (bookLike.includes(userId)){
        console.log('Book already liked')
        // res.json('Book already liked')
      }else {
        bookLike.unshift(req.user._id);
        await book.save();
        console.log('Idea liked');
        // res.json('Idea liked')
      }
    }catch (err){
      console.log('Server Error', err);
      // res.json('Server Error')
    }
  }

  async disLikeBook(req,res){
    try{
      const { id } = req.body;
      const book = await Book.findOne({id})
      let userId = req.user._id.toString();
      const bookLike = book.likes;
      if (bookLike.includes(userId)){
        const removeIndex = bookLike
          .map((like) => like.toString())
          .indexOf(userId);

        bookLike.splice(removeIndex, 1);
        // idea.vote -= 1;
        await book.save();
        res.json(bookLike);
        Console.log('Idea Unliked');
        // res.json('Book already liked')
      }else {
        console.log('Book not been liked');
        // res.json('Idea liked')
      }
    }catch (err){
      console.log('Server Error', err);
    }
  }

  async cmtBook(req,res){
    try{
       const {id} = req.body;
       const {content} = req.body;
       let userId = req.user._id;

      const formData = {
        content,
      };

      const book = await Book.findOne({id})
      console.log(book)

      const author = await Account.findOne({_id: userId})
      console.log(author)

      formData.author = author._id
      formData.book = book._id

      Comment.create(formData, (error, item) =>{
        item.save();

        book.comments.push(item);
        book.save();
      })
    }catch (err){
      console.log("Thap bai")
    }
  }

  async unCmtBook(req,res){
    try{

    }catch (err){

    }
  }
}

module.exports = new bookController();