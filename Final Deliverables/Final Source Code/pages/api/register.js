// import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../db/connectDb";
import User from "../../models/User";
import { sign } from "jsonwebtoken";
import { serialize } from "cookie";

dbConnect();
const secret = "arunmani";

export default async function handler(req, res) {
  const { method } = req;
  if (method === "POST") {
    try {
      const { Email, Name, Password } = req.body;

      let admin = "no";

      if (Email === "arunmani9787@gmail.com") {
        admin = "yes";
      }

      const userIsThere = await User.find({ Email });

      if (userIsThere.length) {
        return res.status(401).json({ message: "email is already there" });
      }

      if (!Email || !Name || !Password) {
        return res.status(403).json({ message: "Please enter valid fields" });
      }

      var currentUser = await User.findOne({ Email });

      if (currentUser) {
        res.status(401).json({ message: "account found" });
      }

      let user;

      if (admin === "yes") {
        user = await new User({
          ...req.body,
          RequestedStocks: [],
          currentOrders: [],
          admin,
          Timber: 0,
          Cloth: 0,
          Toys: 0,
          Electronics: 0,
          Drinks: 0,
          Food: 0,
          DateWiseDemand: [
            {
              date: "2022-11-08",
              amount: {
                Timber: 0,
                Cloth: 0,
                Toys: 0,
                Electronics: 0,
                Drinks: 0,
                Food: 0,
              },
            },
          ],
        });
        await user.save();
      } else {
        user = await new User({
          ...req.body,
          RequestedStocks: [],
          currentOrders: [],
          admin,
        });
        await user.save();
      }

      const token = sign(
        {
          exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
          Email,
        },
        secret
      );

      const serialised = serialize("OursiteJWT", token, {
        secure: false,
        maxAge: 60 * 60 * 24 * 30,
        path: "/",
      });
      res.setHeader("Set-Cookie", serialised);
      res.send({ user, message: "Success!" });
    } catch (e) {
      res.status(401).json({ message: "REG CLOSEDs" });
    }
  }
}
