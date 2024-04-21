import { User } from "../Models/Users.js";

export const userRegister = async (req, res) => {
  // console.log(req.body)
  const { name, email } = req.body;
  try {
    let user = await User.create({ name, email });

    console.log("Your Register successfully..!", user);
    res.send("<h1>Your Form has been submitted..!</h1>");
  } catch (error) {
    res.send("<h1>Error Accure</h1>");
  }
};