import City from "../../models/City.js";

export default async (req, res, next) => {
    try {
        let updatedCity = await City.findByIdAndUpdate(
            req.params.c_id,
            req.body,
            {new:true} // por default viene en false y devuelve el objeto ANTES de la modificacion
        ).select("country population city photo")
        return res.status(200).json({
            success: true,
            message: 'City updated!',
            response: updatedCity
        })
    } catch (error) {
        next(error);
    }
}