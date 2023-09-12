import { Router } from "express";
import passport from "../middlewares/passport.js";

import register from "../controllers/auth/register.js";
import signin from "../controllers/auth/signin.js";
import signout from "../controllers/auth/signout.js";
import token from "../controllers/auth/token.js";

import isValidPass from "../middlewares/isValidPass.js";
import isPassOk from "../middlewares/isPassOk.js";
import isValidToken from "../middlewares/isValidToken.js";
import notUserExists from "../middlewares/notUserExists.js";
import userExists from "../middlewares/userExists.js";
import validator from "../middlewares/validator.js";
import registerSchema from "../schemas/register.js";
import signinSchema from "../schemas/signin.js";

let authRouter = Router();

authRouter.post(
  "/register",
  validator(registerSchema),
  userExists,
  isValidPass,
  register
);
authRouter.post(
  "/signin",
  validator(signinSchema),
  notUserExists,
  isPassOk,
  isValidToken,
  signin
);
authRouter.post(
  "/token",
  passport.authenticate("jwt", { session: false }),
  isValidToken,
  token
);
authRouter.post(
  "/signout",
  passport.authenticate("jwt", { session: false }),
  signout
);

export default authRouter;
