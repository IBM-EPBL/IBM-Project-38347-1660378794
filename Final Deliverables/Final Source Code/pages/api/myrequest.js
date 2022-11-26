import dbConnect from "../../db/connectDb";
import { verify } from "jsonwebtoken";
import Stock from "../../models/Stock";

dbConnect();

export default async function handler(req, res) {
  try {
    const secret = "arunmani";

    const jwt = req.cookies.OursiteJWT;

    const dataFromToken = verify(jwt, secret);

    const Email = dataFromToken.Email;

    let stock = await Stock.find({ email: Email });

    res.status(200).json({ stock });
  } catch (e) {
    res.status(401).json({ message: "no user to be found" });
  }
}
