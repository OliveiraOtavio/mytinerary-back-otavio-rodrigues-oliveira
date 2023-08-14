import User from "../../models/User.js";

export default async (req, res) => {
    try {
        let oneUser = await User.findOne({_id:req.params.id}).select("name mail photo -_id") //select para indicar lo que quiero leer separado por espacio
        return res.status(200).json({
            success: true,
            message: 'User found',
            response: oneUser
        })
    } catch (error) {
        return res.status(400).json ({
            success: false,
            message: 'User not found',
            response: null
        })
    }
}