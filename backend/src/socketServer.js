let users = [];

const socketServer = (socket) => {

  socket.on("joinUser", id=>{
    users.push({id, socketId: socket.id})
  })

  socket.on("disConnect", ()=>{
    const user = users.filter(user => user.socketId !== socket.id)
  })

  //like- unlike
  socket.on('createNotify', msg=>{
    let recipients = msg.recipient;
    const clients = users.filter(user=>recipients.includes(user.id))

    if(clients.length > 0){
      clients.forEach(client=>{
        socket.to(`${client.socketId}`).emit('createNotifyToClient', msg)
        // socket.emit('createNotifyToClient', msg)
      })
    }
  })

  socket.on('removeNotify', ()=>{

  })

  socket.on('addMessage', ()=>{

  })
}

module.exports = socketServer;