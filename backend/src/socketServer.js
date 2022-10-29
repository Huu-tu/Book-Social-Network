let users = [];

const socketServer = (socket) => {

  socket.on("joinUser", id=>{
    users.push({id, socketId: socket.id})
    console.log({users})
  })

  socket.on("disConnect", ()=>{
    const user = users.filter(user => user.socketId !== socket.id)
  })
}

module.exports = socketServer;