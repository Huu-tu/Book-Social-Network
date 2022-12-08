let users = [];

const socketServer = (socket) => {

  socket.on("joinUser", id=>{
    users.push({id, socketId: socket.id})
  })

  socket.on("disConnect", ()=>{
    const user = users.filter(user => user.socketId !== socket.id)
  })

  socket.on('createNotify', msg=>{
    let recipients = msg.recipient;
    const clients = users.filter(user=>recipients.includes(user.id))

    if(clients.length > 0){
      clients.forEach(client=>{
        console.log(client)
        socket.send(client.socketId).emit('createNotifyToClient', msg)
        // socket.emit('createNotifyToClient', msg)
      })
    }
  })

  socket.on('addMessage', msg=>{
    console.log(msg)
  })
}

module.exports = socketServer;