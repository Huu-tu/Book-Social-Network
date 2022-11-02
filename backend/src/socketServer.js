let users = [];

const socketServer = (socket) => {

  socket.on("joinUser", id=>{
    users.push({id, socketId: socket.id})
  })

  socket.on("disConnect", ()=>{
    const user = users.filter(user => user.socketId !== socket.id)
  })

  //like- unlike
  socket.on('createNotify', ()=>{

  })

  socket.on('removeNotify', ()=>{

  })

  socket.on('addMessage', ()=>{

  })
}

module.exports = socketServer;