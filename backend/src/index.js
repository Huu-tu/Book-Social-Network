const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const socket = require("socket.io");
require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;
const route = require('./routes');
const db = require('./config/index')

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use(cookieParser());

db.connect();
route(app);

// app.listen(port, () =>{
//     console.log(`Server is listening at http://localhost:${port}`)
// });

const server = app.listen(port, () =>{
    console.log(`Server is listening at http://localhost:${port}`)
});

const io = socket(server,{
    cors:{
        origin: "*",
        // origin: "http://localhost:3000/chat",
        // methods: ["GET", "POST"],
        // allowedHeaders: ["my-custom-header"],
        // credentials: true
    }
});

let users = [];

const addUser = (userId, socketId) =>{
    users.push({ userId, socketId })
}

const removeUser = (socketId) =>{
    users = users.filter((user) => user.socketId !== socketId);
}

let getUser = (userId)=>{
    return users.find((user) => user.userId === userId)
}

io.on("connection", (socket)=>{
    //When connect
    console.log("New client connected")

    //take userId and socketId from user
    socket.on("addUser",(user) =>{
        user.map(s=>{
            addUser(s._id, socket.id)
            io.emit("getUsers", users)
        })
    })

    // send and get message
    socket.on("send_message", ({ senderId, receiverId, content }) => {
        // console.log(receiverId)
        let user = getUser(receiverId)
        // console.log(user)
        io.to(user.socketId).emit("getMessage", {
            senderId,
            content
        });
    });

    socket.on("disconnect", () => {
        console.log("USER DISCONNECTED");
        removeUser(socket.id);
        io.emit("getUsers", users)
    });
});