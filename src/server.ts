import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

async function main() {
  await mongoose.connect(
    `mongodb+srv://tiny-tree:${config.db_pass}@cluster1.wjj4omp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`,{
      dbName:'tiny-tree'
    }
  );

  app.listen(3000, () => {
    console.log("Server is running ");
  });
}

main();
