const mongoose = require('mongoose');
const URL = process.env.url;

const connect = async () =>{
    try{
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,      
        });
        console.log('Connect Successfully');
    }catch(error){
        console.log('Connect Failed', error);
    }
};

module.exports = { connect };