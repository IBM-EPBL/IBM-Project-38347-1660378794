import mongoose from "mongoose";

let DB_URL =
  "mongodb+srv://arunmani:9787480892@cluster0.o9yhm.mongodb.net/ibm_db?retryWrites=true&w=majority";

function dbConnect() {
  // mongoose;
  // .connect(DB_URL)
  mongoose
    .connect(DB_URL, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DATA BASE CONNECTED");
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
}

export default dbConnect;
