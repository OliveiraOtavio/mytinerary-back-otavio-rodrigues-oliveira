import User from "../../models/User.js";

export default async (req, res, next) => {
    try {
        let allUsers = await User.find()
        return res.status(200).json({
            success: true,
            message: 'Users found',
            response: allUsers
        })
    } catch (error) {
        next(error);
    }
}