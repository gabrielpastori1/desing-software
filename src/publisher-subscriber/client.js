import { io } from "socket.io-client";

const socket = io('http://localhost:3000');

let messages = [];

socket.on('msg' , function (msg) {
  messages.push(msg);
});


function sendMessage(message){
    socket.emit('msg', messages)
}

