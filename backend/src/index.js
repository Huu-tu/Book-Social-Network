const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const socket = require("socket.io");
const cookieSession = require("cookie-session");
const path = require('path');
const socketServer = require('./socketServer')

require('dotenv').config();

const app = express();

const port = process.env.PORT || 4000;
const route = require('./routes');
const db = require('./config/index')

app.use(
  cookieSession({
      maxAge: 24 * 60 * 60 * 1000,
      keys: [process.env.COOKIE_KEY],
  })
);

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
app.use(cookieParser());
app.use("/img", express.static(path.join(__dirname, "publics/img")));


// const http = require('http').createServer(app)
// const io = require('socket.io')(http)


db.connect();
route(app);

// io.on('connection', socket=>{
//   // socketServer(socket)
//   console.log(socket.id + 'connect')
// })

// http.listen(port, () =>{
//     console.log(`Server is listening at http://localhost:${port}`)
// });

const server = app.listen(port, () =>{
    console.log(`Server is listening at http://localhost:${port}`)
});

const io = socket(server,{
    cors:{
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    }
});

io.on('connection', socket=>{
  socketServer(socket)
})

