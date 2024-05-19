import jwt from "jsonwebtoken";
import { User } from "../Models/User.js";

export const Authenticate = async (req, res, next) => {
  const token = req.header("Auth");
  // console.log("This is token ",token);

  if (!token) return res.status(400).json({ message: "Login first" });

  const decoded = jwt.verify(token, process.env.JWT_Secret);
  // console.log(decoded)
  const id = decoded.userId;

  let user = await User.findById(id);

  if (!user) return res.json({ message: "user not find" });

  req.user = user;

  next();
};
