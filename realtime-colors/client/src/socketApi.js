import io from "socket.io-client";

let socket

export const init = () => {
    console.log("Sunucuya bağlanılıyor...");
    socket = io('http://localhost3000' , {
        transports: ['websocket'],
    });

    socket.on('connect', () => console.log("Sunucuya bağlanto başarıyla gerçekleşti"))
}
