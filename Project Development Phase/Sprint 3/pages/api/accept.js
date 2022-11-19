import dbConnect from "../../db/connectDb";
import User from "../../models/User";
import { verify } from "jsonwebtoken";
import Stock from "../../models/Stock";

dbConnect();

export default async function handler(req, res) {
  const { method } = req;
  if (method === "POST") {
    try {
      const secret = "arunmani";

      const jwt = req.cookies.OursiteJWT;

      const dataFromToken = verify(jwt, secret);

      const Email = dataFromToken.Email;

      const req1 = await Stock.findById(req.body.id);

      const user = await User.findOne({ Email: "arunmani91787@gmail.com" });

      let type = user[req1.Title] + req1.count;

      const filter = { Email: "arunmani91787@gmail.com" };
      const update = { [req1.Title]: type };

      await User.findOneAndUpdate(filter, update);

      await Stock.findByIdAndDelete(req.body.id);

      let stock = await Stock.find({ email: Email });

      res.status(200).json({ stock });
    } catch (e) {
      res.status(401).json({ message: "no user to be found" });
    }
  }
}
