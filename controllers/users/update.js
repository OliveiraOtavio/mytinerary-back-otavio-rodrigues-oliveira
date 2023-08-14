import User from "../../models/User.js";

export default async (req, res) => {
    try {
        let updatedUser = await User.findByIdAndUpdate(
            req.params.u_id,
            req.body,
            {new:true} // por default viene en false y devuelve el objeto ANTES de la modificacion
        ).select("name photo mail")
        return res.status(200).json({
            success: true,
            message: 'User updated!',
            response: updatedUser
        })
    } catch (error) {
        return res.status(400).json ({
            success: false,
            message: 'User not updated',
            response: null
        })
    }
}