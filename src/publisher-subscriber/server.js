import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
});

let clientes = {};

io.on("connection", (socket) => {
  clientes[socket.id] = socket;
  
  socket.on('msg', (msg) => { 
      Object.entries(clientes).forEach(client => {
          if(client.id == socket.id) break;
          socket.emit('msg', {
              client: socket.id,
              msg
          });
      })
  })

  socket.on('disconect', () => {
    delete clientes[socket.id];
  })
});

httpServer.listen(3000);
console.log('listening');