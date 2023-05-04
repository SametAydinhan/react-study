import io from "socket.io-client"

let socket;

export const init = () =>{
    console.log("Connecting...");
    socket = io("localhost:3000",{
        transports:["websocket"],
    })
    socket.on('connect', () => console.log("Connected!"));
}