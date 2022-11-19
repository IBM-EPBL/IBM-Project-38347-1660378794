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

      const user = await User.find({ Email });

      // console.log(user);

      if (!user.length) {
        return res.status(401).json({ message: "something went to wrong" });
      }

      if (user[0].admin !== "yes") {
        return res.status(401).json({ message: "something went to wrong" });
      }

      let { email } = req.body;

      let stock = req.body.Stock;

      for (let s of stock) {
        let st = await new Stock({
          Title: s.title,
          email,
          count: s.quantity,
          type: "request",
        });

        await st.save();
      }

      let st = await Stock.find({ type: "request" });

      res.status(200).json({ message: "ok", user, st });
    } catch (e) {
      res.status(401).json({ message: "no user to be found" });
    }
  }
}
