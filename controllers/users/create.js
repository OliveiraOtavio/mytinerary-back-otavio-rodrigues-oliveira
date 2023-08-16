import User from "../../models/User.js";

export default async (req, res, next) => {
  try {
    let newUser = await User.create(req.body);
    return res.status(201).json({
      success: true,
      message: "User created",
      response: newUser._id,
    });
  } catch (error) {
    next(error);
  }
};
