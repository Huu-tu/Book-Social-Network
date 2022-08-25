const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
// const socket = require("socket.io");

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

app.listen(port, () =>{
    console.log(`Server is listening at http://localhost:${port}`)
});

// const server =  app.listen(port, () =>{
//     console.log(`Server is listening at http://localhost:${port}`)
// });

// const io = socket(server,{
//     cors:{
//         origin: "http://localhost:4000",
//         credentials: true,
//     }
// });

// global.onlineUsers = new Map();

// io.on("connection", (socket) => {
//     global.chatSocket = socket;
//     socket.on("add-user", (userId) => {
//         onlineUsers.set(userId, socket.id);
//     });
//
//     socket.on("send-msg", (data) => {
//         const sendUserSocket = onlineUsers.get(data.to);
//         if (sendUserSocket) {
//             socket.to(sendUserSocket).emit("msg-recieve", data.msg);
//         }
//     });
// });