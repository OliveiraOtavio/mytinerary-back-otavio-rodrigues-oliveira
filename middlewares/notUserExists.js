import User from "../models/User.js";

export default async(req, res, next) => {
    try {
        let one = await User.findOne({mail: req.body.mail}, '-password -__v -_id')
        if(!one) {
            return res.status(400).json({
                success: false,
                message: 'This user does not exists',
                response: null
            })
        } else {
            req.user = one
           // console.log(req.user)
            return next()
        }
    } catch (error) {
      return next(error)
    }
}