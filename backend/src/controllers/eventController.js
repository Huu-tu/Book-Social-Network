const Event = require('../models/eventModel');

class eventController {
    async createEvent(req,res){
        let title = req.body.title;
        let description = req.body.description;
        let image = req.file.filename;

        const data = await Event.create({
            title,
            description,
            image,
          });
      
          if (data) {
            return res.status(200).json('Success');
          } else {
            res.json('Failed');
          }
    }

    async detailEvent(req,res){
        Event.findOne({ _id: req.params.id })
        .then((data) => {
          res.json(data);
        })
        .catch((err) => {
          res.json('Failed');
        });
  
    }

    async showEvent(req,res){
        const data = await Event.find();
        if (data) {
          res.json(data);
          // console.log(data)
        } else {
          console.log('Failed');
        }
    
    }

    async updateEvent(req,res){
        let _id = req.body._id;
        let title = req.body.title;
        let description = req.body.description;

    if (_id) {
      const post = await Event.findOneAndUpdate(
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

    async deleteEvent(req,res){
        const _id = req.params.id;

        if (_id) {
          await Event.findOneAndDelete({ _id: _id });
        } else {
          console.log('Ko');
        }
    
    }
}

module.exports = new eventController();
