import app from "./src/app.js";
import {createServer} from 'http'
import { Server } from "socket.io";


const httpServer = createServer(app)
const io = new Server(httpServer,{})


io.on("connection", (socket) => {
    console.log("new connection created");

    socket.on("message", (msg) => {
        console.log("user fired message event");
        console.log(msg);

        socket.broadcast.emit("hello", msg);


    })

  

})


httpServer.listen(3000,() => {
    console.log("server is listen on port 3000");
})