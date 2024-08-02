import mongoose from "mongoose";
import app from "./app";
import cors from "cors";
import config from "./app/config";
import { createServer } from "http";
import { Server } from "socket.io";

async function main() {
  await mongoose.connect(
    `mongodb+srv://tiny-tree:${config.db_pass}@cluster1.wjj4omp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`,
    {
      dbName: "tiny-tree",
    }
  );

  const server = createServer(app);

  const io = new Server(server, {
    cors: {
      origin: ["https://tiny-tree.vercel.app",'http://localhost:5173',"https://tiny-tree1.netlify.app"],
      methods: ["GET", "POST"],
      credentials: true,
      
    },
  });

  io.on("connection", (socket) => {
    console.log("A user is connected");
    // receive a message and response

    socket.on("message", (msg) => {
      io.emit("message", msg);
    });

    socket.on("disconnect", () => {
      console.log("user is disconnected");
    });
  });

  server.listen(3000, () => {
    console.log("Server is running ");
  });
}

main();
