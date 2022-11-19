import dbConnect from "../../db/connectDb";
import User from "../../models/User";
import { verify } from "jsonwebtoken";
import Stock from "../../models/Stock";

dbConnect();

export default async function handler(req, res) {
  try {
    const secret = "arunmani";

    const jwt = req.headers.authorization;

    const dataFromToken = verify(jwt, secret);

    const Email = dataFromToken.Email;

    const user = await User.find({ Email });

    if (!user) {
      return res.status(401).json({ message: "something went to wrong" });
    }

    let stock = await Stock.find({ type: "request" });

    let stockFromUsers = await Stock.find({ type: "from user" });

    res.status(200).json({ user, stock, stockFromUsers });
  } catch (e) {
    res.status(401).json({ message: "no user to be found" });
  }
}
