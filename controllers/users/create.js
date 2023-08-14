import User from "../../models/User.js";

export default async (req, res) => {
  try {
    let newUser = await User.create(req.body);
    return res.status(201).json({
      success: true,
      message: "User created",
      response: newUser._id,
    });
  } catch (err) {
    console.log(err)
    return res.status(400).json({
      success: false,
      message: "Error creating user",
      response: null,
    });
  }
};
